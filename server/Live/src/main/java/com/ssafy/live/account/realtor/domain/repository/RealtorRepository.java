package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RealtorRepository extends JpaRepository<Realtor, Long> {

    Optional<Realtor> findByBusinessNumber(String businessNumber);
    boolean existsByBusinessNumber(String businessNumber);
    Optional<Realtor> findByEmail(String email);
    boolean existsByEmail(String email);
    Realtor findByEmailAndBusinessNumber(String email, String businessNumber);

    @Query(value = "SELECT DISTINCT r from Realtor r "+
            "join fetch r.items i "+
            "join fetch i.house h "+
            "WHERE h.regionCode = :regionCode "+
            "ORDER BY r.ratingScore DESC"
    )
    List<Realtor> findDistinctRealtorWithItemsByHouseByRegion(String regionCode);
}
