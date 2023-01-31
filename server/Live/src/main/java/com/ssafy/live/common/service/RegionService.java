package com.ssafy.live.common.service;

import com.ssafy.live.common.domain.repository.RegionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class RegionService {

    private final RegionRepository regionRepository;

    public List<String> findSidoName() {
        return regionRepository.findDistinctRegionBySidoName();
    }

    public List<String> findGugunName(String sidoName) {
        return regionRepository.findDistinctRegionByGugunName(sidoName);
    }

    public List<String> findDongName(String sidoName, String gugunName) {
        return regionRepository.findDistinctRegionByDongName(sidoName, gugunName);
    }
}
