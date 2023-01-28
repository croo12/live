package com.ssafy.live.house.domain.entity;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.Entity.item.Direction;
import com.ssafy.live.common.domain.Entity.item.Entrance;
import com.ssafy.live.common.domain.Entity.item.Heating;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
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

    @Column(name = "move_in_date")
    private LocalDate moveInDate;

    @Enumerated(EnumType.STRING)
    private Heating heating;

    @Enumerated(EnumType.STRING)
    private Direction direction;

    @Enumerated(EnumType.STRING)
    private Entrance entrance;

    @OneToOne(mappedBy = "item", fetch = FetchType.LAZY)
    private ItemOption itemOption;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_no")
    private House house;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "realtor_no")
    private Realtor realtor;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<ItemImage> houseImages = new ArrayList<>();
}
