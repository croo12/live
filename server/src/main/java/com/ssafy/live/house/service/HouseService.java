package com.ssafy.live.house.service;

import com.ssafy.live.common.domain.Response;
import com.ssafy.live.house.controller.dto.HouseDto;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.repository.HouseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class HouseService {

    private final HouseRepository houseRepository;
    private final Response response;

    public ResponseEntity<?> findHouseByAddress(String address, String addressDetail){
        House house = houseRepository.findTop1ByAddressAndAddressDetail(address,addressDetail);

        if(house==null) return response.fail("주택 정보가 없습니다.", HttpStatus.NO_CONTENT);

        HouseDto.HouseResponse houseResponse = HouseDto.HouseResponse.builder()
                .houseNo(house.getNo())
                .isActive(house.getIsActive())
                .address(house.getAddress())
                .supplyArea(house.getSupplyArea())
                .exclusivePrivateArea(house.getExclusivePrivateArea())
                .floor(house.getFloor())
                .totalFloor(house.getTotalFloor())
                .purpose(house.getPurpose())
                .addressDetail(house.getAddressDetail())
                .room(house.getRoom())
                .bathroom(house.getBathroom())
                .completionYear(house.getCompletionYear())
                .build();

        return response.success(houseResponse,"주택 정보가 조회되었습니다.", HttpStatus.OK);
    }


}