package com.ssafy.live.review.domain.repository;

import com.ssafy.live.review.domain.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
