package com.ssafy.live.house.controller.dto;

import com.ssafy.live.house.domain.entity.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class HouseSearchResponse {

    private int isActive;
    private String address;
    private String addressDetail;
    private float supplyArea;
    private float exclusivePrivateArea;
    private int floor;
    private int totalFloor;
    private String purpose;
    private String sido;
    private String gugun;
    private String dong;
    private int zipCode;
    private int room;
    private int bathroom;
    private String regionCode;

}
