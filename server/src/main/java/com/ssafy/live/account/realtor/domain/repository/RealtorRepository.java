package com.ssafy.live.account.realtor.domain.repository;

import com.ssafy.live.account.realtor.controller.dto.RealtorByRegionProjectionInterface;
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

    @Query(value = "SELECT r.name, r.image_src as imageSrc, r.corp, COUNT(v.review_no) as review, r.rating_score as starScore FROM live.realtor r " +
            "left join review v on r.realtor_no=v.realtor_no " +
            "where r.realtor_no in (select distinct i.realtor_no from item i inner join house h on h.house_no=i.house_no where h.dong LIKE %:dong%)" +
            "group by r.realtor_no " +
            "order by review desc, starScore " +
            "desc", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByReviewsDesc(String dong);

    @Query(value = "SELECT r.name, r.image_src as imageSrc, r.corp, COUNT(v.review_no) as review, r.rating_score as starScore FROM live.realtor r " +
            "left join review v on r.realtor_no=v.realtor_no " +
            "where r.realtor_no in (select distinct i.realtor_no from item i inner join house h on h.house_no=i.house_no where h.dong LIKE %:dong%)" +
            "group by r.realtor_no " +
            "order by starScore desc, review " +
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

    @Query(value = "(SELECT i.item_no as itemNo, m.image_src as imageSrc, i.deposit, i.rent, h.address, h.floor, i.building_name as buildingName FROM realtor r "
        + "inner join item i "
        + "on r.realtor_no = i.realtor_no "
        + "inner join item_image m "
        + "on m.item_no = i.item_no "
        + "inner join house h "
        + "on i.house_no = h.house_no "
        + "where h.region_code LIKE :regionCode% and r.realtor_no=:realtorNo) "
        + "UNION DISTINCT "
        + "(SELECT i.item_no as itemNo, m.image_src as imageSrc, i.deposit, i.rent, h.address, h.floor, i.building_name as buildingName FROM realtor r "
        + "inner join item i "
        + "on r.realtor_no = i.realtor_no "
        + "inner join item_image m "
        + "on m.item_no = i.item_no "
        + "inner join house h "
        + "on i.house_no = h.house_no "
        + "where h.region_code NOT LIKE :regionCode% and r.realtor_no=:realtorNo);", nativeQuery=true)
    List<RealtorByRegionProjectionInterface> findRealtorDetailByRegion(Long realtorNo, String regionCode);
}
