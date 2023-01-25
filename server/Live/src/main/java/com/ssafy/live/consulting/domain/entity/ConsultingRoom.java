package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.User;
import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.ConsultingStatus;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.review.domain.entity.Review;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_room_no"))
@Entity
public class ConsultingRoom extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consulting_no")
    private Consulting consulting;
}
