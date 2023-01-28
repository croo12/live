package com.ssafy.live.account.realtor.domain.entity;

import com.ssafy.live.account.common.Member;
import com.ssafy.live.account.common.Authority ;
import com.ssafy.live.account.realtor.controller.dto.RealtorUpdateRequest;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.review.domain.entity.Review;
import com.sun.istack.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@SuperBuilder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "realtor_no"))
@Entity
public class Realtor extends Member implements UserDetails {

    @Column(name = "business_number")
    private String businessNumber;
    private String corp;

    @Column(name = "registration_number")
    private String registrationNumber;
    private String description;

    @Column(name = "business_address")
    private String businessAddress;

    @Column(name = "rating_score")
    private String ratingScore;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Authority  auth = Authority .ROLE_REALTOR;

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Consulting> consultings = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Contract> contracts = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Notice> notices = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return businessNumber;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public void updateRealtor(RealtorUpdateRequest request, String imgSrc) {
        super.updateInformation(request.getName(), request.getPhone(), imgSrc);
        this.corp = request.getCorp();
        this.description = request.getDescription();
        this.businessAddress = request.getBusinessAddress();
    }
}