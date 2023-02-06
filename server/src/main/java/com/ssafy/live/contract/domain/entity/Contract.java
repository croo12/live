package com.ssafy.live.contract.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.common.domain.Entity.status.ContractStatusConverter;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.house.domain.entity.Item;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "contract_no"))
@Entity
public class Contract extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no")
    @JsonIgnore
    private Users users;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "realtor_no")
    @JsonIgnore
    private Realtor realtor;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    @JsonIgnore
    private Item item; // 단방향

    @Column(name = "move_on_date")
    private LocalDate moveOnDate;

    @Column(name = "number_of_residents")
    private int numberOfResidents;

    @Column(name = "contract_datetime")
    private LocalDate contractDatetime;

    @Enumerated(EnumType.ORDINAL)
    @Convert(converter = ContractStatusConverter.class)
    @Column(name = "contract_state")
    private ContractStatus contractState;

    @Column(name = "special_contract")
    private String specialContract;

    @Column(name = "tenant_address")
    private String tenantAddress;

    @Column(name = "tenant_age")
    private int tenantAge;

    private int commission;
}
