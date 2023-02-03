package com.ssafy.live.account.user.domain.repository;

import com.ssafy.live.account.user.domain.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Optional<Users> findById(String id);
    boolean existsById(String Id);
    Users findByNo(Long userNo);
    Users findByEmailAndId(String email, String id);
}