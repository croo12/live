package com.ssafy.live.notice.service;

import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.notice.controller.dto.NoticeResponse;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.notice.domain.repository.NoticeRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final Response response;

    public ResponseEntity<?> allNotice(UserDetails user) {
        List<NoticeResponse.Notices> list;
        List<Notice> notices;
        if (user.getAuthorities().contains(new SimpleGrantedAuthority("USER"))) {
            notices = noticeRepository.findByUsersOrderByCreatedDate(
                usersRepository.findById(user.getUsername()).get());
        } else {
            notices = noticeRepository.findByRealtorOrderByCreatedDate(
                realtorRepository.findByBusinessNumber(user.getUsername()).get());
        }
        list = notices.stream().map(NoticeResponse.Notices::toEntity)
            .collect(Collectors.toList());
        return response.success(list, "알람 목록을 조회하였습니다.", HttpStatus.OK);
    }
}
