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

    @Query(value = "SELECT  b.name, b.imageSrc, b.corp, a.review, b.starScore, b.total "
        + "FROM( "
        + "SELECT r.realtor_no, COUNT(v.review_no) as review "
        + "FROM realtor r, review v "
        + "WHERE r.realtor_no = v.realtor_no "
        + "GROUP BY r.realtor_no ) a "
        + "RIGHT JOIN( "
        + "SELECT r.realtor_no,r.name, r.image_src as imageSrc, r.corp,r.rating_score as starScore, count(i.realtor_no) as total "
        + "FROM realtor r , item i "
        + "WHERE r.realtor_no = i.realtor_no "
        + "GROUP BY r.realtor_no ) b "
        + "ON a.realtor_no = b.realtor_no order by a.review DESC LIMIT 4", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByReviewsDesc();

    @Query(value = "SELECT  b.name, b.imageSrc, b.corp, a.review, b.starScore, b.total "
        + "FROM( "
        + "SELECT r.realtor_no, COUNT(v.review_no) as review "
        + "FROM realtor r, review v "
        + "WHERE r.realtor_no = v.realtor_no "
        + "GROUP BY r.realtor_no ) a "
        + "RIGHT JOIN( "
        + "SELECT r.realtor_no,r.name, r.image_src as imageSrc, r.corp,r.rating_score as starScore, count(i.realtor_no) as total "
        + "FROM realtor r , item i "
        + "WHERE r.realtor_no = i.realtor_no "
        + "GROUP BY r.realtor_no ) b "
        + "ON a.realtor_no = b.realtor_no order by b.starScore DESC LIMIT 4", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByStarRatingDesc();

    @Query(value = "SELECT  b.name, b.imageSrc, b.corp, a.review, b.starScore, b.total "
        + "FROM( "
        + "SELECT r.realtor_no, COUNT(v.review_no) as review "
        + "FROM realtor r, review v "
        + "WHERE r.realtor_no = v.realtor_no "
        + "GROUP BY r.realtor_no ) a "
        + "RIGHT JOIN( "
        + "SELECT r.realtor_no,r.name, r.image_src as imageSrc, r.corp,r.rating_score as starScore, count(i.realtor_no) as total "
        + "FROM realtor r , item i "
        + "WHERE r.realtor_no = i.realtor_no "
        + "GROUP BY r.realtor_no ) b "
        + "ON a.realtor_no = b.realtor_no order by b.total DESC LIMIT 4", nativeQuery = true)
    List<RealtorProjectionInterface> findAllByOrderByCountByItemDesc();

    @Query(value = "SELECT r.* FROM realtor r "
        + "inner join item i "
        + "on r.realtor_no = i.realtor_no "
        + "inner join house h "
        + "on i.house_no = h.house_no "
        + "where h.region_code LIKE :regionCode% AND h.contracted = false "
        + "group by r.realtor_no order by r.rating_score DESC", nativeQuery = true)
    List<Realtor> findDistinctRealtor(String regionCode);

    @Query(value =
        "(SELECT i.item_no as itemNo, m.image_src as imageSrc, i.deposit, i.rent, h.address, h.floor, h.building_name as buildingName, h.exclusive_private_area as area "
            + "FROM realtor r "
            + "inner join item i "
            + "on r.realtor_no = i.realtor_no "
            + "left join item_image m "
            + "on m.item_no = i.item_no "
            + "inner join house h "
            + "on i.house_no = h.house_no "
            + "where h.region_code LIKE :regionCode% and r.realtor_no=:realtorNo AND h.contracted = false "
            + "AND m.item_image_no in (select min(item_image_no) from item_image group by item_no)) "
            + "UNION DISTINCT "
            + "(SELECT i.item_no as itemNo, m.image_src as imageSrc, i.deposit, i.rent, h.address, h.floor, h.building_name as buildingName, h.exclusive_private_area as area "
            + "FROM realtor r "
            + "inner join item i "
            + "on r.realtor_no = i.realtor_no "
            + "left join item_image m "
            + "on m.item_no = i.item_no "
            + "inner join house h "
            + "on i.house_no = h.house_no "
            + "where h.region_code NOT LIKE :regionCode% and r.realtor_no=:realtorNo AND h.contracted = false "
            + "AND m.item_image_no in (select min(item_image_no) from item_image group by item_no))", nativeQuery = true)
    List<RealtorByRegionProjectionInterface> findRealtorDetailByRegion(Long realtorNo,
        String regionCode);
}
