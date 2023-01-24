package com.ssafy.live.house.controller;

import com.ssafy.live.house.service.HouseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/houses")
@Slf4j
public class HouseController {

    @Autowired
    HouseService houseService;

    @GetMapping("/test")
    private ResponseEntity<?> getTest() {
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
