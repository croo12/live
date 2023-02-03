package com.ssafy.live.house.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.house.controller.dto.ItemDto;
import com.ssafy.live.house.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;
    @PostMapping("")
    private ResponseEntity<?> registItem(@RequestBody ItemDto.ItemRegistRequest itemRegistRequest) {
        return itemService.registItem(itemRegistRequest);
    }

    @GetMapping("/regions")
    public ResponseEntity<?> itemsByBuildingName(@RequestBody ItemDto.ItemsByBuildingName request, Errors errors)  {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return itemService.itemsByBuildingName(request);
    }
}
