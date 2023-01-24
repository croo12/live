package com.ssafy.live.house.domain.entity;

import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.ReservationStatus;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "house_no"))
@Entity
public class House extends BaseEntity {

    @OneToMany(mappedBy = "house")
    private List<Item> items = new ArrayList<>();

    private int isActive;

    private String address;

    @Column(name = "supply_area")
    private float supplyArea;

    @Column(name = "exclusive_private_area")
    private float exclusivePrivateArea;

    private int floor;

    @Column(name = "total_floor")
    private int totalFloor;

    private String purpose;

    private String sido;

    private String gugun;

    private String dong;

    @Column(name = "zip_code")
    private int zipCode;

    @Column(name = "address_detail")
    private String addressDetail;

    private int room;

    private int bathroom;

    @Column(name = "region_code")
    private String regionCode;
}
