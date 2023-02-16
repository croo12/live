package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ConsultingStatus;
import com.ssafy.live.consulting.domain.entity.Consulting;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultingRepository extends JpaRepository<Consulting, Long> {

    @Query(value = "SELECT c from consulting c " +
        "WHERE c.realtor = :realtor " +
        "AND (c.status=:status " +
        "OR c.status=:status1) "
        + "ORDER BY c.created_date DESC" , nativeQuery = true)
    List<Consulting> findByRealtorAndStatusOrStatusOrderByConsultingDate(Realtor realtor,
        ConsultingStatus status, ConsultingStatus status1);

    @Query(value = "SELECT c from Consulting c " +
        "WHERE c.users = :user " +
        "AND (c.status=:status " +
        "OR c.status=:status1) ORDER BY c.created_date DESC" , nativeQuery = true)
    List<Consulting> findByUsersAndStatusOrStatusOrderByConsultingDate(Users user,
        ConsultingStatus status, ConsultingStatus status1);

    List<Consulting> findByConsultingDateBetween(LocalDateTime start, LocalDateTime end);

    @Query(value = "SELECT * FROM consulting "
        + "where realtor_no = :realtorNo "
        + "and status between :status1 and :status2 "
        + "and consulting_date "
        + "LIKE :date% "
        + "ORDER BY c.created_date DESC" , nativeQuery = true)
    List<Consulting> findByRealtorNoAndStatusBetweenAndConsultingDateStartigWith(Long realtorNo, int status1, int status2, String date);
}
