package com.ssafy.live.house.controller;

import com.ssafy.live.house.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;
//    @PostMapping("")
//    private ResponseEntity<?> registItem(ItemRequest itemRequest) {
//        return itemService.registItem
//    }

}
