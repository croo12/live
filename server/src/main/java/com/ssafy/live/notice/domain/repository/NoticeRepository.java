package com.ssafy.live.notice.domain.repository;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import com.ssafy.live.account.user.domain.entity.Users;
import com.ssafy.live.notice.domain.entity.Notice;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {

    List<Notice> findByUsersOrderByCreatedDateDesc(Users users);

    List<Notice> findByRealtorOrderByCreatedDateDesc(Realtor realtor);
}
