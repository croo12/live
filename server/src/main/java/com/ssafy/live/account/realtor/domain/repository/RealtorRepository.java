package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.controller.dto.RealtorProjectionInterface;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RealtorRepository extends JpaRepository<Realtor, Long> {

    Optional<Realtor> findByBusinessNumber(String businessNumber);
    boolean existsByBusinessNumber(String businessNumber);
    Realtor findByEmailAndBusinessNumber(String email, String businessNumber);

    @Query(value = "SELECT r.name, r.image_src as imageSrc, r.corp, COUNT(v.review_no) as review, ROUND(avg(v.rating_score), 1) as starScore FROM live.realtor r " +
            "left join review v on r.realtor_no=v.realtor_no " +
            "where r.realtor_no in (select distinct i.realtor_no from item i inner join house h on h.house_no=i.house_no where h.dong LIKE %:dong%)" +
            "group by r.realtor_no " +
            "order by COUNT(v.review_no) " +
            "desc", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByReviewsDesc(String dong);

    @Query(value = "SELECT r.name, r.image_src as imageSrc, r.corp, COUNT(v.review_no) as review, ROUND(avg(v.rating_score), 1) as starScore FROM live.realtor r " +
            "left join review v on r.realtor_no=v.realtor_no " +
            "where r.realtor_no in (select distinct i.realtor_no from item i inner join house h on h.house_no=i.house_no where h.dong LIKE %:dong%)" +
            "group by r.realtor_no " +
            "order by ROUND(avg(v.rating_score), 1) " +
            "desc", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByStarRatingDesc(String dong);

    @Query(value = "SELECT r.* FROM realtor r " +
        "left join review v on v.realtor_no = r.realtor_no " +
        "left join item i on i.realtor_no = r.realtor_no " +
        "inner join house h on h.house_no=i.house_no " +
        "group by r.realtor_no order by AVG(v.rating_score) DESC", nativeQuery=true)
    List<Realtor> findDistinctRealtor();
    @Query(value = "SELECT r.* FROM realtor r "
        + "left join review v on v.realtor_no = r.realtor_no "
        + "left join item i on i.realtor_no = r.realtor_no "
        + "inner join house h on h.house_no=i.house_no "
        + "where substr(h.region_code, 1,2) = :sido "
        + "group by r.realtor_no order by AVG(v.rating_score) DESC", nativeQuery=true)
    List<Realtor> findDistinctRealtorWithSido(@Param("sido") String sido);

    @Query(value = "SELECT r.* FROM realtor r "
        + "left join review v on v.realtor_no = r.realtor_no "
        + "left join item i on i.realtor_no = r.realtor_no "
        + "inner join house h on h.house_no=i.house_no "
        + "where substr(h.region_code, 1,2) = :sido "
        + "and substr(h.region_code, 3,3) = :gugun "
        + "group by r.realtor_no order by AVG(v.rating_score) DESC", nativeQuery=true)
    List<Realtor> findDistinctRealtorWithSidoAndGugun(@Param("sido") String sido, @Param("gugun") String gugun);

    @Query(value = "SELECT r.* FROM realtor r "
        + "left join review v on v.realtor_no = r.realtor_no "
        + "left join item i on i.realtor_no = r.realtor_no "
        + "inner join house h on h.house_no=i.house_no "
        + "where substr(h.region_code, 1,2) = :sido "
        + "and substr(h.region_code, 3,3) = :gugun "
        + "and substr(h.region_code, 6) = :dong "
        + "group by r.realtor_no order by AVG(v.rating_score) DESC", nativeQuery=true)
    List<Realtor> findDistinctRealtorWithSidoAndGugunAndDong(@Param("sido") String sido, @Param("gugun") String gugun, @Param("dong") String dong);
}
