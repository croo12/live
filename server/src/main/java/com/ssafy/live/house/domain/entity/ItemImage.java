package com.ssafy.live.house.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "item_image_no"))
@Entity
@SuperBuilder
public class ItemImage extends BaseEntity {

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @Column(name = "image_src")
    private String imageSrc;
}
