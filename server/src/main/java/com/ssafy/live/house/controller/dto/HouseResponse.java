package com.ssafy.live.house.controller.dto;

import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.house.domain.entity.House;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class HouseResponse extends BaseEntity {
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
}
