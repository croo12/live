package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RealtorRepository extends JpaRepository<Realtor, Long> {

    Realtor findByEmailAndBusinessNumber(String email, String businessNumber);
}
