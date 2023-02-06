package com.ssafy.live.house.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;
import net.bytebuddy.implementation.bind.annotation.Super;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "house_no"))
@Entity
public class House extends BaseEntity {

    @JsonIgnore
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

    private int completionYear;
}
