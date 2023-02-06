package com.ssafy.live.notice.controller;

import com.ssafy.live.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequiredArgsConstructor
@RestController
@RequestMapping("/notices")
public class NoticeController {

    private final NoticeService noticeService;

    @GetMapping
    public ResponseEntity<?> allNotice(@RequestHeader(AUTHORIZATION) String token) {
        return noticeService.allNotice(token);
    }
}
