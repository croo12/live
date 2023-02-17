package com.ssafy.live.contract.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.contract.domain.entity.Contract;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {

    List<Contract> findByContractStateAndUsersOrderByCreatedDateDesc(ContractStatus status, Users users);

    List<Contract> findByContractStateAndRealtorOrderByCreatedDateDesc(ContractStatus contractStatus, Realtor realtor);
}
