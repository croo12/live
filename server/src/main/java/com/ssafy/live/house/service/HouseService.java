package com.ssafy.live.house.service;

import static com.ssafy.live.common.exception.ErrorCode.HOUSE_NOT_FOUND;

import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.exception.BadRequestException;
import com.ssafy.live.house.controller.dto.HouseResponse;
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

    public ResponseEntity<?> findHouseByAddress(String address, String addressDetail) {
        House house = houseRepository.findTop1ByAddressAndAddressDetail(address, addressDetail);
        if (house == null) {
            throw new BadRequestException(HOUSE_NOT_FOUND);
        }

        HouseResponse.HouseDetailResponse houseDetailResponse = HouseResponse.HouseDetailResponse.toDto(
            house);
        return response.success(houseDetailResponse, "주택 정보가 조회되었습니다.", HttpStatus.OK);
    }


}