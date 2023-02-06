package com.ssafy.live.house.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.house.controller.dto.ItemRequest;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.entity.ItemOption;
import com.ssafy.live.house.domain.repository.HouseRepository;
import com.ssafy.live.house.domain.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ItemService {



    private final Response response;
    private final ItemRepository itemRepository;
    private final HouseRepository houseRepository;
    private final RealtorRepository realtorRepository;

    public ResponseEntity<?> registItem(ItemRequest.ItemRegistRequest itemRegistRequest) {

        Realtor realtor = realtorRepository.findById(itemRegistRequest.getRealtorNo()).orElse(null);
        //중개사 유효성검사 필요
        Long houseNo = itemRegistRequest.getHouse().getHouseNo();
        House house = houseRepository.findById(houseNo).orElse(null);
        if(house==null) {
            house = itemRegistRequest.getHouse().toEntity();
            houseRepository.save(house);
        }

        Item item = itemRegistRequest.toEntity(realtor, house);
        ItemOption itemOption = itemRegistRequest.getItemOption().toEntity(item.getNo());
        itemOption.setItem(item);
        item.setOption(itemOption);

        itemRepository.save(item);
        return response.success("매물이 등록되었습니다.", HttpStatus.OK);
    }
}