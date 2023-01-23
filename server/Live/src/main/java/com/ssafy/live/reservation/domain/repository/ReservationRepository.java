package com.ssafy.live.reservation.domain.repository;

import com.ssafy.live.reservation.domain.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
