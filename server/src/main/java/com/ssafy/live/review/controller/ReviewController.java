package com.ssafy.live.review.controller;

import com.ssafy.live.review.controller.dto.ReviewRequest;
import com.ssafy.live.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequiredArgsConstructor
@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<?> regist(@RequestHeader(AUTHORIZATION) String token, @RequestBody ReviewRequest.Regist regist) {
        return reviewService.regist(token, regist);
    }

    @GetMapping
    public ResponseEntity<?> allReview(@RequestHeader(AUTHORIZATION) String token) {
        return reviewService.allReview(token);
    }
}
