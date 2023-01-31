package com.ssafy.live.account.realtor.domain.entity;

import com.ssafy.live.account.common.Member;
import com.ssafy.live.account.common.Role;
import com.ssafy.live.consulting.domain.entity.Consulting;
import com.ssafy.live.contract.domain.entity.Contract;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.review.domain.entity.Review;
import com.sun.istack.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

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
public class Realtor extends Member {

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

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Consulting> consultings = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Contract> contracts = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "realtor", cascade = CascadeType.ALL)
    private List<Notice> notices = new ArrayList<>();
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return null;
//    }
//
//    @Override
//    public String getUsername() {
//        return null;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return false;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return false;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return false;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return false;
//    }
}