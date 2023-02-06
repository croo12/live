package com.ssafy.live.house.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.house.controller.dto.ItemRequest;
import com.ssafy.live.house.controller.dto.ItemResponse;
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
        if(realtor==null){
            return response.fail("중개사 정보가 없습니다. 다시 로그인해주세요.", HttpStatus.UNAUTHORIZED);
        }

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

    public ResponseEntity<?> inquiryItemDetail(Long itemNo) {
        Item item = itemRepository.findById(itemNo).orElse(null);
        if(item==null) {
            return response.fail("매물 정보가 없습니다.", HttpStatus.NO_CONTENT);
        }

        ItemResponse.ItemDetailResponse itemDetailResponse = ItemResponse.ItemDetailResponse.toDto(item);
        return response.success(itemDetailResponse, "매물 상세 정보가 조회되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> updateItemDetail(ItemRequest.ItemUpdateRequest itemUpdateRequest) {
        Item item = itemRepository.findById(itemUpdateRequest.getItemNo()).orElse(null);
        if(item==null){
            return response.fail("매물 정보가 없습니다.", HttpStatus.BAD_REQUEST);
        }
        Item updatedItem = itemUpdateRequest.toEntity();
        ItemOption updatedItemOption = itemUpdateRequest.getItemOption().toEntity(item.getNo());
        updatedItem.setNo(item.getNo());
        updatedItem.setOption(updatedItemOption);
        itemRepository.save(updatedItem);
        return response.success("매물 정보가 수정되었습니다.", HttpStatus.OK);
    }
}