package com.ssafy.live.common.service;

import com.ssafy.live.common.controller.dto.RegionResponse;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.domain.repository.RegionRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class RegionService {

    private final RegionRepository regionRepository;
    private final Response response;

    public ResponseEntity<?> findRegionList(String regionCode) {
        String end = "";
        switch (regionCode.length()) {
            case 0:
                end = "00000000";
                break;
            case 2:
                end = "00000";
                break;
        }

        List<RegionResponse> regionList = regionRepository.findAllByRegionCodeStartingWithAndRegionCodeEndingWith(
                regionCode, end)
            .stream()
            .map(RegionResponse::toResponse)
            .collect(Collectors.toList());

        return response.success(regionList, "지역 정보가 조회되었습니다.", HttpStatus.OK);
    }
}

