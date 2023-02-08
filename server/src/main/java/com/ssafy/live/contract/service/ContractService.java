package com.ssafy.live.contract.service;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.contract.controller.dto.ContractRequest;
import com.ssafy.live.contract.controller.dto.ContractRequest.Update;
import com.ssafy.live.contract.controller.dto.ContractResponse;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.contract.domain.repository.ContractRepository;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.entity.ItemImage;
import com.ssafy.live.house.domain.repository.ItemImageRepository;
import com.ssafy.live.house.domain.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
    private final JwtTokenProvider jwtTokenProvider;

    public ResponseEntity<?> regist(ContractRequest.Regist regist) {
        Users users = usersRepository.findById(regist.getUserNo()).get();
        if(users == null) {
            return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        Realtor realtor = realtorRepository.findById(regist.getRealtorNo()).get();
        if (realtor == null) {
            return response.fail("해당하는 공인중개사를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        Item item = itemRepository.findById(regist.getItemNo()).get();
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
        return response.success("계약신청이 완료되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractList(String token, int status) {
        ContractStatus contractStatus = ContractStatus.ofValue(status);
        if (!jwtTokenProvider.validateToken(token)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        List<ContractResponse.ContractList> list = null;
        if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
            list = contractRepository.findByContractStateAndUsers(contractStatus, usersRepository.findById(authentication.getName()).get()).stream()
                .map((contract)->
                     ContractResponse.ContractList.toEntity(
                         contract.getRealtor().getNo(),
                         ContractResponse.ContractList.MemberInfo.toRealtor(contract.getRealtor()),
                         ContractResponse.ContractList.ItemInfo.toEntity(contract.getItem())
                     )
                )
                .collect(Collectors.toList());
        } else if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_REALTOR"))) {
            list = contractRepository.findByContractStateAndRealtor(contractStatus, realtorRepository.findByBusinessNumber(authentication.getName()).get()).stream()
                .map((contract)->
                        ContractResponse.ContractList.toEntity(
                            contract.getUsers().getNo(),
                            ContractResponse.ContractList.MemberInfo.toUser(contract.getUsers()),
                            ContractResponse.ContractList.ItemInfo.toEntity(contract.getItem())
                        )
                )
                .collect(Collectors.toList());
        } else {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
        return response.success(list, "계약 목록을 조회하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractDetail(String token, Long contractNo) {
        if (!jwtTokenProvider.validateToken(token)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
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

    public ResponseEntity<?> contractUpdate(String token, Update update, Long contractNo) {
        if (!jwtTokenProvider.validateToken(token)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
        Contract contract = contractRepository.findById(contractNo).get();
        Item item = itemRepository.findById(contract.getItem().getNo()).get();
        item.updatePayment(update.getDeposit(), update.getRent(), update.getMaintenanceFee());
        contract.updateInfo(update.getMoveOnDate(), update.getTermOfContract(), update.getSpecialContract(), update.getCommission(), item.getDeposit());
        itemRepository.save(item);
        contractRepository.save(contract);
        return response.success("계약 정보가 수정되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractApprove(String token, Long contractNo) {
        if (!jwtTokenProvider.validateToken(token)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
        Contract contract = contractRepository.findById(contractNo).get();
        contract.approve();
        contractRepository.save(contract);
        return response.success("계약이 승인되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> contractComplete(String token, Long contractNo) {
        if (!jwtTokenProvider.validateToken(token)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
        Contract contract = contractRepository.findById(contractNo).get();
        contract.complete();
        contractRepository.save(contract);
        return response.success("계약 체결이 완료되었습니다.", HttpStatus.OK);
    }
}
