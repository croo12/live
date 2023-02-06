package com.ssafy.live.contract.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.contract.domain.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {

    List<Contract> findByContractStateAndUsers(ContractStatus status, Users users);

    List<Contract> findByContractStateAndRealtor(ContractStatus contractStatus, Realtor realtor);
}
