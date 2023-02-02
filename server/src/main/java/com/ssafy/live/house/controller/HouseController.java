package com.ssafy.live.house.controller;

import com.ssafy.live.house.controller.dto.HouseResponse;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.repository.HouseRepository;
import com.ssafy.live.house.service.HouseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/houses")
@Slf4j
public class HouseController {

    private final HouseService houseService;

    @GetMapping(value ="/", headers = { "Content-type=application/json" })
    private ResponseEntity<?> searchHouseByAddress(
            @RequestParam String address,
            @RequestParam String addressDetail) {

        List<HouseResponse> houseList = houseService.findByAddressAndAddressDetail(address, addressDetail);

        if(houseList.isEmpty()){
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<HouseResponse>(houseList.get(0), HttpStatus.OK);
        }
    }

//    @DeleteMapping(value ="/", headers = { "Content-type=application/json" })
//    private ResponseEntity<?> deleteHouse(@RequestParam Long houseNo){
//        int result = houseService.deleteHouse(houseNo);
//    }

}
