package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.House;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRepository extends JpaRepository<House, Long> {

}
