package com.ssafy.live.account.user.domain.repository;

import com.ssafy.live.account.user.domain.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Optional<Users> findById(String id);
    boolean existsById(String Id);
}
