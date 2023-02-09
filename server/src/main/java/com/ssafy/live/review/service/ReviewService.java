package com.ssafy.live.review.service;

import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.common.domain.Response;
import com.ssafy.live.common.domain.exception.NotFoundException;
import com.ssafy.live.consulting.domain.repository.ConsultingRepository;
import com.ssafy.live.review.controller.dto.ReviewRequest;
import com.ssafy.live.review.controller.dto.ReviewResponse;
import com.ssafy.live.review.domain.entity.Review;
import com.ssafy.live.review.domain.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.ssafy.live.common.domain.exception.ErrorCode.REALTOR_NOT_FOUND;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UsersRepository usersRepository;
    private final RealtorRepository realtorRepository;
    private final ConsultingRepository consultingRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final Response response;

    public ResponseEntity<?> regist(ReviewRequest.Regist regist) {
        Realtor realtor = realtorRepository.findById(regist.getRealtorNo())
                        .orElseThrow(() -> new NotFoundException(REALTOR_NOT_FOUND));
        reviewRepository.save(Review.builder()
                .realtor(realtor)
                        .users(usersRepository.findById(regist.getUserNo()).get())
                        .consulting(consultingRepository.findById(regist.getConsultingNo()).get())
                        .reviewInfo(regist.getReviewInfo())
                        .ratingScore(regist.getRatingScore())
                .build());
        Long count = reviewRepository.countBy(realtor);
        realtor.updateRatingScore(count, regist.getRatingScore());
        realtorRepository.save(realtor);
        return response.success("리뷰를 등록하였습니다.", HttpStatus.OK);
    }

    public ResponseEntity<?> allReview(String token) {
        List<ReviewResponse.Reviews> list;
        Authentication authentication = jwtTokenProvider.getAuthentication(token);
        List<Review> reviews;
        if(authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
            reviews = reviewRepository.findByUsers(usersRepository.findById(authentication.getName()).get());
            list = reviews.stream().map((review)-> ReviewResponse.Reviews.toEntity(review.getRealtor(), review))
                .collect(Collectors.toList());
        } else {
            reviews = reviewRepository.findByRealtor(realtorRepository.findByBusinessNumber(authentication.getName()).get());
            list = reviews.stream().map((review)-> ReviewResponse.Reviews.toEntity(review.getUsers(), review))
                    .collect(Collectors.toList());
        }
        return response.success(list,"리뷰 목록을 조회하였습니다.", HttpStatus.OK);
    }
}
