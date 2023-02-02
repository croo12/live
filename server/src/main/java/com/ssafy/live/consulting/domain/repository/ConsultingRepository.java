package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.common.domain.ConsultingStatus;
import com.ssafy.live.consulting.domain.entity.Consulting;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultingRepository extends JpaRepository<Consulting, Long> {

    Consulting findByNo(Long realtorNo);
    List<Consulting> findByStatusBetween(ConsultingStatus reservervationProcessing, ConsultingStatus realtorResponseComplete);
}
