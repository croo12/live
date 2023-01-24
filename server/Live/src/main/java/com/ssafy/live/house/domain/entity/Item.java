package com.ssafy.live.house.domain.entity;

import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.item.Direction;
import com.ssafy.live.common.domain.item.Entrance;
import com.ssafy.live.common.domain.item.Heating;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "item_no"))
@Entity
public class Item extends BaseEntity {

    private int deposit;

    private int rent;

    @Column(name = "maintenance_fee")
    private int maintenanceFee;

    private String description;

    @Column(name = "move_in_date")
    private LocalDate moveInDate;

    @Enumerated(EnumType.STRING)
    //@Builder.Default
    private Heating heating;

    @Enumerated(EnumType.STRING)
    //@Builder.Default
    private Direction direction;

    @Enumerated(EnumType.STRING)
    //@Builder.Default
    private Entrance entrance;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "option_no")
    private Option option;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_no")
    private House house;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<HouseImage> houseImages = new ArrayList<>();
}
