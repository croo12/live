package com.ssafy.live.account.user.domain.repository;

import com.ssafy.live.account.user.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
