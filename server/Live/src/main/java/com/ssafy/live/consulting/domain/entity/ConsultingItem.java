package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.house.domain.entity.Item;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "consultingItem", cascade = CascadeType.ALL)
    private List<Record> records = new ArrayList<>();
}

