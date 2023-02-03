package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.consulting.domain.entity.ConsultingItem;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultingItemRepository extends JpaRepository<ConsultingItem, Long> {

    List<ConsultingItem> findByConsultingNo(Long consultingNo);
}
