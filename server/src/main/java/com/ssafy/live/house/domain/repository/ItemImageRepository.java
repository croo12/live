package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.Item;
import com.ssafy.live.house.domain.entity.ItemImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemImageRepository extends JpaRepository<ItemImage, Long> {

    List<ItemImage> findByItem(Item item);

    List<ItemImage> findByItemNo(Long no);
}
