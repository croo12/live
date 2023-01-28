package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RealtorRepository extends JpaRepository<Realtor, Long> {

    Realtor findByEmailAndBusinessNumber(String email, String businessNumber);

    @Query(value = "SELECT DISTINCT r from Realtor r "+
            "join fetch r.items i "+
            "join fetch i.house h "+
            "WHERE h.regionCode = :regionCode "+
            "GROUP BY r.no ORDER BY r.ratingScore DESC"
    )
    List<Realtor> findDistinctRealtorWithItemsByHouseByRegion(String regionCode);
}
