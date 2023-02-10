package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.Item;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query(value = "SELECT i.* from Item i "
        + "inner join House h on h.house_no=i.house_no "
        + "inner join Realtor r on r.realtor_no=i.realtor_no "
        + "WHERE i.building_name LIKE %:word% "
        + "AND h.region_code LIKE :regionCode% "
        + "AND r.realtor_no=:realtorNo", nativeQuery = true)
    List<Item> findByRealtorLikeBuildingName(String word, Long realtorNo, String regionCode);

    @Query(value = "SELECT i.* FROM Item i " +
            "INNER JOIN house h ON h.house_no=i.house_no " +
            "WHERE i.realtor_no = :realtorNo " +
            "AND h.region_code LIKE :regionCode%", nativeQuery = true)
    List<Item> findByRealtorNoAndRegionCode(Long realtorNo, String regionCode);
}
