package com.ssafy.live.consulting.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ConsultingStatus;
import com.ssafy.live.common.domain.Entity.status.ConsultingStatusConverter;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.review.domain.entity.Review;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "consulting_no"))
@Entity
public class Consulting extends BaseEntity {

    @JsonIgnore
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
    @Builder.Default
    private List<ConsultingItem> consultingItems = new ArrayList<>();

    @Column(name = "consulting_date")
    private LocalDateTime consultingDate;

    private String requirement;
    private String link;

    @Convert(converter = ConsultingStatusConverter.class)
    @Enumerated(EnumType.ORDINAL)
    private ConsultingStatus status;

    public void updateStatus(int status) {
        if (status == 2) {
            this.status = ConsultingStatus.CONSULTING_CONFIRMED;
        } else if (status == 5) {
            this.status = ConsultingStatus.CONSULTING_CANCLED;
        }
    }

    public void addLink(String link) {
        this.link = link;
    }
}
