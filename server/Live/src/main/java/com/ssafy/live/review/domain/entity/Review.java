package com.ssafy.live.review.domain.entity;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.User;
import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.ReservationStatus;
import com.ssafy.live.reservation.domain.entity.Reservation;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "review_no"))
@Entity
public class Review extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private Realtor realtor;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    private Reservation reservation;

    @Column(name = "review_info")
    private String review_Info;

    @Column(name = "rating_score")
    private int ratingScore;

    @Column(name = "iscontract")
    private boolean iscontract;
}

