package com.ssafy.live.common.controller;

import com.ssafy.live.common.service.RegionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/regions")
public class RegionController {

    private final RegionService regionService;

    @GetMapping("")
    public ResponseEntity<?> findRegionList(@RequestParam String regionCode) {
        return regionService.findRegionList(regionCode);
    }
}
