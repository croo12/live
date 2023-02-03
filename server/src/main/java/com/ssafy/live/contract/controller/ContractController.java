package com.ssafy.live.contract.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/contracts")
public class ContractController {

    @GetMapping("/test")
    private ResponseEntity<?> getTest() {
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
