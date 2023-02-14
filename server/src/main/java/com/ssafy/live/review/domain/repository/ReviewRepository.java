package com.ssafy.live.review.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.review.domain.entity.Review;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByUsers(Users users);

    List<Review> findByRealtor(Realtor realtor);

    @Query(value = "SELECT COUNT(*) FROM Review r WHERE r.realtor=:realtor", nativeQuery = true)
    Long countBy(Realtor realtor);
}
