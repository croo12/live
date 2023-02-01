package com.ssafy.live.contract.domain.repository;

import com.ssafy.live.contract.domain.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<Contract, Long> {

}
