package com.ssafy.live.house.domain.repository;

import com.ssafy.live.house.domain.entity.ItemImage;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemImageRepository extends JpaRepository<ItemImage, Long> {

    @Query(value = "SELECT image_src FROM item_image WHERE item_no = :no LIMIT 1", nativeQuery = true)
    String findByItemNo(Long no);
}
