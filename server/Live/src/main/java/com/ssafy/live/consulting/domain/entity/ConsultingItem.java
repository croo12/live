package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.house.domain.entity.Item;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_item_no"))
@Entity
public class ConsultingItem extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_no")
    private Consulting consulting;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;
}

