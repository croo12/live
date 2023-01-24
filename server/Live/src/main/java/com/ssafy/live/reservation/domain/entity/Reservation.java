package com.ssafy.live.reservation.domain.entity;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.User;
import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.ReservationStatus;
import com.ssafy.live.review.domain.entity.Review;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "reservation_no"))
@Entity
public class Reservation extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "realtor_no")
    private Realtor realtor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    @OneToOne(mappedBy = "reservation", cascade = CascadeType.ALL)
    private Review review;

    @Column(name = "consulting_date")
    private LocalDateTime consultingDate;

    private String requirement;

    private ReservationStatus status;
}

