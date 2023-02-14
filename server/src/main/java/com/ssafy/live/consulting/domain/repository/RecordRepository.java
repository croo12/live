package com.ssafy.live.consulting.domain.repository;

import com.ssafy.live.consulting.domain.entity.Record;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<Record, Long> {

}