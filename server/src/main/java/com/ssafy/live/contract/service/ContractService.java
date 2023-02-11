package com.ssafy.live.contract.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.exception.BadRequestException;
import com.ssafy.live.common.service.SMSService;
import com.ssafy.live.contract.controller.dto.ContractRequest;
import com.ssafy.live.contract.controller.dto.ContractRequest.Update;
import com.ssafy.live.contract.controller.dto.ContractResponse;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.contract.domain.repository.ContractRepository;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.entity.ItemImage;
import com.ssafy.live.house.domain.repository.ItemImageRepository;
import com.ssafy.live.house.domain.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.ssafy.live.common.exception.ErrorCode.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContractService {

    private final Response response;
    private final ContractRepository contractRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final ItemImageRepository itemImageRepository;
    private final ItemRepository itemRepository;
    private final SMSService smsService;

    public ResponseEntity<?> regist(ContractRequest.Regist regist) {
        Users users = usersRepository.findById(regist.getUserNo())
                .orElseThrow(() -> new BadRequestException(USER_NOT_FOUND));
        Realtor realtor = realtorRepository.findById(regist.getRealtorNo())
                .orElseThrow(() -> new BadRequestException(REALTOR_NOT_FOUND));
        Item item = itemRepository.findById(regist.getItemNo())
                .orElseThrow(() -> new BadRequestException(ITEM_NOT_FOUND));
        Contract contract = Contract.builder()
            .users(users)
            .realtor(realtor)
            .item(item)
            .moveOnDate(regist.getMoveOnDate())
            .numberOfResidents(regist.getNumberOfResidents())
            .contractState(ContractStatus.CONTRACT_APPROVING)
            .specialContract(regist.getSpecialContract())
            .tenantAddress(regist.getTenantAddress())
            .tenantAge(regist.getTenantAge())
            .commission(regist.getCommission())
            .downPayment((item.getDeposit()/100)*10)
            .balance((item.getDeposit()/100)*90)
            .termOfContract(regist.getTermOfContract())
                .build();
        contractRepository.save(contract);

        //smsService.sendSMS(contract.getNo(), SMSContent.NEW_CONTRACT, contract.getUsers());
        //smsService.sendSMS(contract.getNo(), SMSContent.NEW_CONTRACT, contract.getRealtor());

        return response.success("계약신청이 완료되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractList(UserDetails user, int status) {
        ContractStatus contractStatus = ContractStatus.ofValue(status);
        List<ContractResponse.ContractList> list = null;
        if(user.getAuthorities().contains(new SimpleGrantedAuthority("USER"))) {
            list = contractRepository.findByContractStateAndUsers(contractStatus, usersRepository.findById(user.getUsername()).get()).stream()
                .map((contract)->
                     ContractResponse.ContractList.toEntity(
                         contract.getRealtor().getNo(),
                         ContractResponse.ContractList.MemberInfo.toRealtor(contract.getRealtor()),
                         ContractResponse.ContractList.ItemInfo.toEntity(contract.getItem())
                     )
                )
                .collect(Collectors.toList());
        } else if(user.getAuthorities().contains(new SimpleGrantedAuthority("REALTOR"))) {
            list = contractRepository.findByContractStateAndRealtor(contractStatus, realtorRepository.findByBusinessNumber(user.getUsername()).get()).stream()
                .map((contract)->
                        ContractResponse.ContractList.toEntity(
                            contract.getUsers().getNo(),
                            ContractResponse.ContractList.MemberInfo.toUser(contract.getUsers()),
                            ContractResponse.ContractList.ItemInfo.toEntity(contract.getItem())
                        )
                )
                .collect(Collectors.toList());
        } else {
            throw new BadRequestException(WRONG_AUTHENTICATION_TYPE);
        }
        return response.success(list, "계약 목록을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractDetail(Long contractNo) {
        Contract contract = contractRepository.findById(contractNo).get();
        List<ItemImage> itemImages = itemImageRepository.findByItem(contract.getItem());
        List<String> images = itemImages.stream().map((i)->i.getImageSrc()).collect(Collectors.toList());
        ContractResponse.ContractDetail contractDetail = ContractResponse.ContractDetail
            .toEntity(
                ContractResponse.ContractDetail.RealtorInfo.toEntity(contract.getRealtor()),
                ContractResponse.ContractDetail.UserInfo.toEntity(contract.getUsers()),
                ContractResponse.ContractDetail.ItemInfo.toEntity(contract.getItem(), images),
                ContractResponse.ContractDetail.ContractInfo.toEntity(contract)
            );

        return response.success(contractDetail, "계약 상세를 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractUpdate(Update update, Long contractNo) {
        Contract contract = contractRepository.findById(contractNo).get();
        Item item = itemRepository.findById(contract.getItem().getNo()).get();
        item.updatePayment(update.getDeposit(), update.getRent(), update.getMaintenanceFee());
        contract.updateInfo(update.getMoveOnDate(), update.getTermOfContract(), update.getSpecialContract(), update.getCommission(), item.getDeposit());
        itemRepository.save(item);
        contractRepository.save(contract);

        //smsService.sendSMS(contract.getNo(), SMSContent.CONTRACT_UPDATE, contract.getUsers());
        return response.success("계약 정보가 수정되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractApprove(Long contractNo) {
        Contract contract = contractRepository.findById(contractNo).get();
        contract.approve();
        contractRepository.save(contract);

        //smsService.sendSMS(contract.getNo(), SMSContent.CONTRACT_UPDATE, contract.getUsers());

        return response.success("계약이 승인되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractComplete(Long contractNo) {
        Contract contract = contractRepository.findById(contractNo).get();
        contract.complete();
        House house = contract.getItem().getHouse();
        house.setContracted(true);
        contractRepository.save(contract);

        //smsService.sendSMS(contract.getNo(), SMSContent.CONTRACT_SIGN, contract.getUsers());
        //smsService.sendSMS(contract.getNo(), SMSContent.CONTRACT_SIGN, contract.getRealtor());
        return response.success("계약 체결이 완료되었습니다.", HttpStatus.OK);
    }
}
