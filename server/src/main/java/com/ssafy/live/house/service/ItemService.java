package com.ssafy.live.house.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.domain.repository.RegionRepository;
import com.ssafy.live.house.controller.dto.ItemDto;
import com.ssafy.live.house.controller.dto.ItemResponse;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.repository.HouseRepository;
import com.ssafy.live.house.domain.repository.ItemImageRepository;
import com.ssafy.live.house.domain.repository.ItemRepository;
import java.util.ArrayList;
import java.util.List;

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
    private final ItemImageRepository itemImageRepository;
    private final HouseRepository houseRepository;
    private final RealtorRepository realtorRepository;
    private final RegionRepository regionRepository;

    public ResponseEntity<?> registItem(ItemDto.ItemRegistRequest itemRegistRequest) {
        Realtor realtor = realtorRepository.findById(itemRegistRequest.getRealtorNo()).get();
        if(realtor == null) return response.fail("해당하는 공인중개사 정보를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        Long houseNo = itemRegistRequest.getHouseNo();
        House house;
        if(houseNo!=null && !houseNo.equals("")) {
            house = houseRepository.findById(houseNo).orElse(null);
        }
        else {
            house = itemRegistRequest.toHouseEntity();
        }

        Item item = itemRegistRequest.toItemEntity(realtor, house);

        //옵션 등록 처리 해야함
        //ItemOption option = itemRegistRequest.toItemOptionEntity(item.getNo());
        //item.setOption(option);

        itemRepository.save(item);
        return response.success(item,"매물이 등록되었습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> itemsByBuildingName(ItemDto.ItemsByBuildingName request) {
        List<ItemResponse.ItemsByBuildingName> list = new ArrayList<>();
        List<Item> items = itemRepository.findByRealtorLikeBuildingName(request.getWord(), request.getRealtorNo(), request.getSidoName(), request.getGugunName(),request.getDongName());
        items.stream()
            .forEach(item -> {
                House house = item.getHouse();
                list.add(ItemResponse.ItemsByBuildingName.builder()
                    .itemNo(item.getNo())
                    .deposit(item.getDeposit())
                    .rent(item.getRent())
                    .maintenanceFee(item.getMaintenanceFee())
                    .description(item.getDescription())
                    .buildingName(item.getBuildingName())
                    .image(itemImageRepository.findByItemNo(item.getNo()))
                    .address(house.getAddress())
                    .addressDetail(house.getAddressDetail())
                    .build());
            });
        return response.success(list, "매물 목록이 조회되었습니다.", HttpStatus.OK);
    }
}
