package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.consulting.domain.entity.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultingRepository extends JpaRepository<Consulting, Long> {

}
