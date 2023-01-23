package com.ssafy.live.house.domain.entity;

import com.ssafy.live.common.domain.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "option_no"))
@Entity
public class Option extends BaseEntity {

    private boolean bed;
    @Column(name = "washing_machine")
    private boolean washingMachine;
    @Column(name = "air_conditioner")
    private boolean airConditioner;
    private boolean desk;
    private boolean closet;
    private boolean bath;
    private boolean sink;
    private boolean cctv;
    private boolean table;
    private boolean sofa;
    @Column(name = "shoe_rack")
    private boolean shoeRack;
    private boolean refrigerator;
    @Column(name = "drying_machine")
    private boolean dryingMachine;
    private boolean bathtub;
    private boolean bidet;
    private boolean dishwasher;
    @Column(name = "gas_stove")
    private boolean gasStove;
    @Column(name = "induction_cooktop")
    private boolean inductionCooktop;
    private boolean microwave;
    private boolean oven;
    private boolean guard;
    private boolean intercom;
    private boolean keycard;
    private boolean elevator;
    @Column(name = "fire_alarm")
    private boolean fireAlarm;
    private boolean veranda;
    private boolean terrace;
    private boolean garden;
    @Column(name = "parking_lot")
    private boolean parkingLot;
}
