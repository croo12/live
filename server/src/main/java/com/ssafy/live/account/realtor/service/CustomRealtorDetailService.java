package com.ssafy.live.account.realtor.service;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomRealtorDetailService implements UserDetailsService {

    private final RealtorRepository realtorRepository;

    @Override
    public UserDetails loadUserByUsername(String number) throws UsernameNotFoundException {
        return realtorRepository.findByBusinessNumber(number)
            .map(this::createUserDetail)
            .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
    }

    private UserDetails createUserDetail(Realtor realtor) {
        return new User(realtor.getBusinessNumber(), realtor.getPassword(),
            realtor.getAuthorities());
    }
}
