package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.House;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HouseRepository extends JpaRepository<House, Long> {

    List<House> findByAddressAndAddressDetail(String address, String addressDetail);

}
