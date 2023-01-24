package com.ssafy.live.notice.domain.entity;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.User;
import com.ssafy.live.common.domain.BaseEntity;
import com.ssafy.live.reservation.domain.entity.Reservation;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "notice_no"))
@Entity
public class Notice extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private Realtor realtor;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "notice_info")
    private String noticeInfo;

    @Column(name = "notice_writer")
    private String noticeWriter;

    @Column(name = "notice_date")
    private LocalDateTime noticeDate;
}

