package com.ssafy.live.notice.domain.repository;

import com.ssafy.live.notice.domain.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {

}
