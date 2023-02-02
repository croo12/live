package com.ssafy.live.house.controller.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;


@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class HouseParam {
    private Long houseNo;
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
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
}
