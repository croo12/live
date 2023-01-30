package com.ssafy.live.account.user.service;

import com.ssafy.live.account.user.domain.repository.UsersRepository;
import lombok.RequiredArgsConstructor;

import com.ssafy.live.account.user.domain.entity.Users;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usersRepository.findById(username)
                .map(this::createUserDetail)
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
    }

    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetail(Users users) {
        return new User(users.getUsername(), users.getPassword(), users.getAuthorities());
    }
}