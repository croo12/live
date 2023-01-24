package com.ssafy.live.notice.domain.repository;

import com.ssafy.live.notice.domain.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

}
