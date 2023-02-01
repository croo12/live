package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.consulting.domain.entity.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultingRepository extends JpaRepository<Consulting, Long> {

}
