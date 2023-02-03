package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.House;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {

    Optional<House> findById(Long no);
}
