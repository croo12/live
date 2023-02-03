package com.ssafy.live.common.domain.repository;

import com.ssafy.live.common.domain.Entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepository extends JpaRepository<Region, String> {

//    List<String> findDistinctBySidoNameAndSidoNameNotNullOrderBySidoNameAsc();
    List<String> findDistinctBySidoNameNotNullOrderBySidoNameAsc();

    List<String> findDistinctByGugunNameAndSidoNameAndGugunNameNotNullOrderByGugunNameAsc(String sidoName);

    List<String> findDistinctByDongNameAndSidoNameAndGugunNameDongNameNotNullOrderByDongNameAsc(String sidoName, String gugunName);

    Region findBySidoNameAndGugunNameAndDongName(String sidoName, String gugunName, String dongName);
}
