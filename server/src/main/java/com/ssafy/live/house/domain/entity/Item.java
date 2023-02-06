package com.ssafy.live.house.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.common.domain.Entity.item.Direction;
import com.ssafy.live.common.domain.Entity.item.Entrance;
import com.ssafy.live.common.domain.Entity.item.Heating;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "item_no"))
@Entity
public class Item extends BaseEntity {


    private int deposit;

    private int rent;

    @Column(name = "maintenance_fee")
    private int maintenanceFee;

    private String description;
    @Column(name = "building_name")
    private String buildingName;

    @Column(name = "move_in_date")
    private LocalDate moveInDate;

    @Enumerated(EnumType.STRING)
    private Heating heating;

    @Enumerated(EnumType.STRING)
    private Direction direction;

    @Enumerated(EnumType.STRING)
    private Entrance entrance;

    @JsonIgnore
    @OneToOne(mappedBy = "item", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private ItemOption itemOption;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_no")
    private House house;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "realtor_no")
    private Realtor realtor;

    @JsonIgnore
    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<ItemImage> itemImages = new ArrayList<>();

    public void setOption(ItemOption option) {
        this.itemOption = option;
    }
    public void setItemImages(List<ItemImage> itemImages) {
        this.itemImages = itemImages;
    }

    public void updatePayment(int deposit, int rent, int maintenanceFee) {
        this.deposit = deposit;
        this.rent = rent;
        this.maintenanceFee = maintenanceFee;
    }
}
