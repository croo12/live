package com.ssafy.live.house.controller.dto;

import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class HouseResponse extends BaseEntity {
    private Long no;
    private int isActive;
    private String address;
    private float supplyArea;
    private float exclusivePrivateArea;
    private int floor;
    private int totalFloor;
    private String purpose;
    private String sido;
    private String gugun;
    private String dong;
    private int zipCode;
    private String addressDetail;
    private int room;
    private int bathroom;
    private String regionCode;


    public HouseResponse(House house) {
        this.no = house.getNo();
        this.isActive = house.getIsActive();
        this.address = house.getAddress();
        this.supplyArea = house.getSupplyArea();
        this.exclusivePrivateArea = house.getExclusivePrivateArea();
        this.floor = house.getFloor();
        this.totalFloor = house.getTotalFloor();
        this.purpose = house.getPurpose();
        this.sido = house.getSido();
        this.gugun = house.getGugun();
        this.dong = house.getDong();
        this.zipCode = house.getZipCode();
        this.addressDetail = house.getAddressDetail();
        this.room = house.getRoom();
        this.bathroom = house.getBathroom();
        this.regionCode = house.getRegionCode();
    }
}
