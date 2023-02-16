package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.common.domain.Entity.BaseEntity;
import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_room_no"))
@Entity
public class ConsultingRoom extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_no")
    private Consulting consulting;
}
