package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.house.domain.entity.Item;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@SuperBuilder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_item_no"))
@Entity
public class ConsultingItem extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_no")
    private Consulting consulting;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;

    @OneToMany(mappedBy = "consultingItem", cascade = CascadeType.ALL)
    @Builder.Default
    private List<Record> records = new ArrayList<>();
}

