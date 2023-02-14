package com.ssafy.live.account.user.domain.repository;

import com.ssafy.live.account.user.domain.entity.Users;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    Optional<Users> findById(String id);

    boolean existsById(String Id);

    Optional<Users> findByEmailAndId(String email, String id);
}
