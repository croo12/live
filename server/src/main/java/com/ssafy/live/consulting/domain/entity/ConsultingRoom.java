package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.common.domain.Entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_room_no"))
@Entity
public class ConsultingRoom extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_no")
    private Consulting consulting;
}
