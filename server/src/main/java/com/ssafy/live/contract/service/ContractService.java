package com.ssafy.live.contract.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.ContractStatus;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.contract.controller.dto.ContractRequest;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.contract.domain.repository.ContractRepository;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContractService {

    private final Response response;
    private final ContractRepository contractRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final ItemRepository itemRepository;

    public ResponseEntity<?> regist(ContractRequest.Regist regist) {
        Users users = usersRepository.findById(regist.getUserNo()).get();
        if(users == null) return response.fail("해당하는 회원을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        Realtor realtor = realtorRepository.findById(regist.getRealtorNo()).get();
        if (realtor == null) return response.fail("해당하는 공인중개사를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
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
                .build();
        contractRepository.save(contract);
        return response.success("계약신청이 완료되었습니다.", HttpStatus.OK);
    }
}
