package com.ssafy.live.common.domain.repository;

import com.ssafy.live.common.domain.Entity.Region;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegionRepository extends JpaRepository<Region, String> {

    List<Region> findAllByRegionCodeStartingWithAndRegionCodeEndingWith(String regionCode,
        String end);
}

