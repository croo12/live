package com.ssafy.live.house.controller;

import com.ssafy.live.house.controller.dto.ItemRequest;
import com.ssafy.live.house.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;
    @PostMapping("")
    private ResponseEntity<?> registItem(@RequestBody ItemRequest.ItemRegistRequest itemRegistRequest)
    {
        return itemService.registItem(itemRegistRequest);
    }

    @GetMapping("/{itemNo}")
    private ResponseEntity<?> inquiryItemDetail(@PathVariable Long itemNo){
        return itemService.inquiryItemDetail(itemNo);
    }

    @PutMapping("/{itemNo}")
    private ResponseEntity<?> updateItemDetail(@RequestBody ItemRequest.ItemUpdateRequest itemUpdateRequest){
        return itemService.updateItemDetail(itemUpdateRequest);
    }

}
