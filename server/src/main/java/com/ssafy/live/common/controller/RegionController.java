package com.ssafy.live.common.controller;

import com.ssafy.live.common.service.RegionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/regions")
public class RegionController {

    private final RegionService regionService;

    @GetMapping ("/sidos")
    public ResponseEntity<List<String>> findSidoName() {
        log.info("시도 이름 조회");
        return ResponseEntity.ok()
                .body(regionService.findSidoName());
    }

    @GetMapping ("/guguns")
    public ResponseEntity<List<String>> findGugunName(@RequestParam String sidoName) {
        log.info("구군 이름 조회");
        return ResponseEntity.ok()
                .body(regionService.findGugunName(sidoName));
    }

    @GetMapping ("/dongs")
    public ResponseEntity<List<String>> findDongName(@RequestParam String sidoName, @RequestParam String gugunName) {
        log.info("구군 이름 조회");
        return ResponseEntity.ok()
                .body(regionService.findDongName(sidoName, gugunName));
    }
}
