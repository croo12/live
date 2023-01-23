package com.ssafy.live.account.realtor.domain.entity;

import com.ssafy.live.account.common.Member;
import com.ssafy.live.account.common.Role;
import com.sun.istack.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;

@Getter
@SuperBuilder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AttributeOverride(name = "no", column = @Column(name = "user_no"))
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