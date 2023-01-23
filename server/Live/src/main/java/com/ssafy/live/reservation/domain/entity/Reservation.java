package com.ssafy.live.reservation.domain.entity;

import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.common.domain.ReservationStatus;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "reservation_no"))
@Entity
public class Reservation extends BaseEntity {

    @Column(name = "consulting_date")
    private LocalDateTime consultingDate;

    private String requirement;

    private ReservationStatus status;
}
