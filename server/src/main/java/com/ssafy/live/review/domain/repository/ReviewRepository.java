package com.ssafy.live.review.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.review.domain.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByUsers(Users users);

    List<Review> findByRealtor(Realtor realtor);

    @Query("SELECT COUNT(*) FROM Review r WHERE r.realtor=:realtor")
    Long countBy(Realtor realtor);
}
