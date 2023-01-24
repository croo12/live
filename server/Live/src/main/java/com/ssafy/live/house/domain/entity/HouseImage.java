package com.ssafy.live.house.domain.entity;

import com.ssafy.live.common.domain.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "house_image_no"))
@Entity
public class HouseImage extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private Item item;
}
