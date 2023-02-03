package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import java.util.Optional;

import io.lettuce.core.dynamic.annotation.Param;
import org.hibernate.annotations.NamedNativeQuery;
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

    @Query(value = "SELECT r.* FROM realtor r " +
            "inner join review v on v.realtor_no = r.realtor_no " +
            "inner join item i on i.realtor_no = r.realtor_no " +
            "inner join house h where h.house_no=i.house_no and h.region_code=:region_code " +
            "group by r.realtor_no order by AVG(v.rating_score) DESC", nativeQuery=true)
    List<Realtor> findDistinctRealtorWithItemsByHouseByRegion(@Param("region_code") String region_code);

    Optional<Realtor> findById(Long realtorNo);
}
