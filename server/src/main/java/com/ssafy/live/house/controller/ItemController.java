package com.ssafy.live.house.controller;

import com.ssafy.live.house.controller.dto.ItemRequest;
import com.ssafy.live.house.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;
    @PostMapping
    private ResponseEntity<?> registItem(
            @RequestPart ItemRequest.ItemRegistRequest itemRegistRequest,
            @RequestPart List<MultipartFile> files) throws IOException {
        return itemService.registItem(itemRegistRequest, files);
    }

    @GetMapping("/{itemNo}")
    private ResponseEntity<?> inquiryItemDetail(@PathVariable Long itemNo){
        return itemService.findItemDetail(itemNo);
    }

    @PutMapping("/{itemNo}")
    private ResponseEntity<?> updateItemDetail(
            @RequestPart ItemRequest.ItemUpdateRequest itemUpdateRequest,
            @RequestPart List<MultipartFile> files) throws IOException {
        return itemService.updateItemDetail(itemUpdateRequest, files);
    }

    @GetMapping("/regions")
    public ResponseEntity<?> itemsByBuildingName(@RequestHeader(AUTHORIZATION) String token, @RequestBody ItemRequest.ItemsByBuildingName request)  {
        return itemService.itemsByBuildingName(token, request);
    }
}
