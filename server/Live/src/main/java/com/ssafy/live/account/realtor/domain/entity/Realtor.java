package com.ssafy.live.account.realtor.domain.entity;

import com.ssafy.live.account.common.Member;
import com.ssafy.live.account.common.Role;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.reservation.domain.entity.Reservation;
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
@AttributeOverride(name = "no", column = @Column(name = "user_no"))
@Entity
public class Realtor extends Member implements UserDetails {

    @OneToMany(mappedBy = "realtor")
    private List<Reservation> reservations = new ArrayList<>();

    @OneToMany(mappedBy = "realtor")
    private List<Contract> contracts = new ArrayList<>();

    @OneToMany(mappedBy = "realtor")
    private List<Review> reviews = new ArrayList<>();

    @Column(name = "business_number")
    private String businessNumber;

    private String corp;

    @Column(name = "registration_number")
    private String registrationNumber;

    private String description;

    @Column(name = "business_address")
    private String businessAddress;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Role role = Role.ROLE_REALTOR;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
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
}