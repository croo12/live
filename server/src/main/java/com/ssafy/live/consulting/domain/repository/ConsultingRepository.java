package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ConsultingStatus;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.consulting.domain.entity.ConsultingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConsultingRepository extends JpaRepository<Consulting, Long> {

    List<Consulting> findByRealtorAndStatusOrStatusOrderByConsultingDate(Realtor realtor, ConsultingStatus reservervationProcessing, ConsultingStatus realtorResponseComplete);
    List<Consulting> findByUsersAndStatusOrStatusOrderByConsultingDate(Users user, ConsultingStatus status, ConsultingStatus status1);
    List<Consulting> findByConsultingDateBetween(LocalDateTime start, LocalDateTime end);
}
