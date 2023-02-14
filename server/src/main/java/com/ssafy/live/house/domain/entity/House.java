package com.ssafy.live.house.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "house_no"))
@Entity
public class House extends BaseEntity {

    @JsonIgnore
    @OneToMany(mappedBy = "house")
    @Builder.Default
    private List<Item> items = new ArrayList<>();

    private boolean contracted;

    private String address;

    @Column(name = "supply_area")
    private float supplyArea;

    @Column(name = "exclusive_private_area")
    private float exclusivePrivateArea;

    private int floor;

    @Column(name = "total_floor")
    private int totalFloor;

    private String purpose;
    @Column(name = "building_name")
    private String buildingName;

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

    public void setContracted(boolean contracted) {
        this.contracted = contracted;
    }
}
