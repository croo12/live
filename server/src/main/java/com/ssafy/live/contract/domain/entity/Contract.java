package com.ssafy.live.contract.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.common.domain.Entity.BaseEntity;
import com.ssafy.live.common.domain.Entity.status.ContractStatus;
import com.ssafy.live.common.domain.Entity.status.ContractStatusConverter;
import com.ssafy.live.house.domain.entity.Item;
import java.time.LocalDate;
import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

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

    @Column(name = "approve_datetime")
    private LocalDate approveDatetime;

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

    @Column(name = "tenant_detail_address")
    private String tenantDetailAddress;

    @Column(name = "tenant_age")
    private int tenantAge;

    private int commission;

    @Column(name = "down_payment")
    private int downPayment;

    @Column(name = "balance")
    private int balance;

    @Column(name = "term_of_contract")
    private int termOfContract;

    public void updateInfo(LocalDate moveOnDate, int termOfContract, String specialContract,
        int commission,
        int deposit) {
        this.moveOnDate = moveOnDate;
        this.termOfContract = termOfContract;
        this.specialContract = specialContract;
        this.commission = commission;
        this.downPayment = (deposit / 100) * 10;
        this.balance = (deposit / 100) * 90;
    }

    public void approve() {
        this.contractState = ContractStatus.CONTRACT_PROCESSING;
    }

    public void complete() {
        this.contractState = ContractStatus.CONTRACT_COMPLETE;
    }
}
