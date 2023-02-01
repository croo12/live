package com.ssafy.live.consulting.domain.entity;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.common.domain.ConsultingStatus;
import com.ssafy.live.review.domain.entity.Review;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_no"))
@Builder
@Entity
public class Consulting extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "realtor_no")
    private Realtor realtor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    private Users users;

    @OneToOne(mappedBy = "consulting", cascade = CascadeType.ALL)
    private Review review;

    @OneToOne(mappedBy = "consulting", cascade = CascadeType.ALL)
    private ConsultingRoom consultingRoom;

    @OneToMany(mappedBy = "consulting", cascade = CascadeType.ALL)
    private List<ConsultingItem> consultingItems = new ArrayList<>();

    @Column(name = "consulting_date")
    private LocalDateTime consultingDate;

    private String requirement;

    private ConsultingStatus status;
}

