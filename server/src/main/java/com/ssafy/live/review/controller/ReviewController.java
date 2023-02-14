package com.ssafy.live.review.controller;

import com.ssafy.live.review.controller.dto.ReviewRequest;
import com.ssafy.live.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<?> regist(@RequestBody ReviewRequest.Regist regist) {
        return reviewService.regist(regist);
    }

    @GetMapping
    public ResponseEntity<?> allReview(Authentication authentication) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return reviewService.allReview(principal);
    }
}
