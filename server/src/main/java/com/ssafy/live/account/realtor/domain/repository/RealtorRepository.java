package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.controller.dto.RealtorProjectionInterface;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RealtorRepository extends JpaRepository<Realtor, Long> {

    Optional<Realtor> findByBusinessNumber(String businessNumber);
    boolean existsByBusinessNumber(String businessNumber);
    Realtor findByEmailAndBusinessNumber(String email, String businessNumber);

    @Query(value = "SELECT r.name, r.image_src as imageSrc, r.corp, COUNT(v.review_no) as review, ROUND(avg(v.rating_score), 1) as starScore FROM live.realtor r " +
            "left join review v on r.realtor_no=v.realtor_no " +
            "where r.realtor_no in (select distinct i.realtor_no from item i inner join house h on h.house_no=i.house_no where h.dong LIKE %:dong%)" +
            "group by r.realtor_no " +
            "order by COUNT(v.review_no) desc, ROUND(avg(v.rating_score), 1) " +
            "desc", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByReviewsDesc(String dong);

    @Query(value = "SELECT r.name, r.image_src as imageSrc, r.corp, COUNT(v.review_no) as review, ROUND(avg(v.rating_score), 1) as starScore FROM live.realtor r " +
            "left join review v on r.realtor_no=v.realtor_no " +
            "where r.realtor_no in (select distinct i.realtor_no from item i inner join house h on h.house_no=i.house_no where h.dong LIKE %:dong%)" +
            "group by r.realtor_no " +
            "order by ROUND(avg(v.rating_score), 1) desc, COUNT(v.review_no) " +
            "desc", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByStarRatingDesc(String dong);

    @Query(value = "SELECT r.* FROM realtor r "
        + "inner join item i "
        + "on r.realtor_no = i.realtor_no "
        + "inner join house h "
        + "on i.house_no = h.house_no "
        + "where h.region_code LIKE :regionCode% "
        + "group by r.realtor_no order by r.rating_score DESC", nativeQuery=true)
    List<Realtor> findDistinctRealtor(String regionCode);
}
