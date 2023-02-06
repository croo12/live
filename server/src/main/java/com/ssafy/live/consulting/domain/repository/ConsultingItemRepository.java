package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.consulting.domain.entity.ConsultingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultingItemRepository extends JpaRepository<ConsultingItem, Long> {

    List<ConsultingItem> findByConsultingNo(Long consultingNo);
}
