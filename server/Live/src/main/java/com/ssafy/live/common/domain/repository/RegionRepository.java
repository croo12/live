package com.ssafy.live.common.domain.repository;

import com.ssafy.live.common.domain.Entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepository extends JpaRepository<Region, String> {

    @Query("SELECT DISTINCT r.sidoName FROM Region r WHERE r.sidoName IS NOT NULL ORDER BY r.sidoName")
    List<String> findDistinctRegionBySidoName();

    @Query("SELECT DISTINCT r.gugunName FROM Region r WHERE r.sidoName = :sidoName AND r.gugunName IS NOT NULL ORDER BY r.gugunName")
    List<String> findDistinctRegionByGugunName(String sidoName);

    @Query("SELECT DISTINCT r.dongName FROM Region r WHERE r.sidoName = :sidoName AND r.gugunName = :gugunName AND r.dongName IS NOT NULL ORDER BY r.dongName")
    List<String> findDistinctRegionByDongName(String sidoName, String gugunName);
}
