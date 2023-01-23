package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
