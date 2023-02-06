package com.ssafy.live.notice.service;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.notice.controller.dto.NoticeResponse;
import com.ssafy.live.notice.domain.entity.Notice;
import com.ssafy.live.notice.domain.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final Response response;

    public ResponseEntity<?> allNotice(String token) {
        if (!jwtTokenProvider.validateToken(token)) {
            return response.fail("잘못된 요청입니다.", HttpStatus.BAD_REQUEST);
        }
        List<NoticeResponse.Notices> list;
        List<Notice> notices;
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
            notices = noticeRepository.findByUsers(usersRepository.findById(authentication.getName()).get());
        } else {
            notices = noticeRepository.findByRealtor(realtorRepository.findByBusinessNumber(authentication.getName()).get());
        }
        list = notices.stream().map((notice)-> NoticeResponse.Notices.builder()
                        .noticeInfo(notice.getNoticeInfo())
                        .noticeWriter(notice.getNoticeWriter())
                        .noticeDate(notice.getCreatedDate())
                        .build())
                .collect(Collectors.toList());
        return response.success(list,"메인페이지의 공인중개사 목록을 조회하였습니다.", HttpStatus.OK);
    }
}
