package com.ssafy.live.house.service;

import com.ssafy.live.house.controller.dto.HouseResponse;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.repository.HouseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class HouseService {

    private final HouseRepository houseRepository;

    public List<HouseResponse> findByAddressAndAddressDetail(String address, String addressDetail){
        return houseRepository.findByAddressAndAddressDetail(address,addressDetail)
                .stream().map(house -> new HouseResponse(house)).collect(Collectors.toList());
    }

}