package com.ssafy.live.consulting.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.consulting.service.ConsultingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequiredArgsConstructor
@RestController
@RequestMapping("/consultings")
public class ConsultingController {

    private final ConsultingService consultingService;

    @PostMapping
    public ResponseEntity<?> reserve(@Validated @RequestBody ConsultingRequest.Reserve reserve, Errors errors)  {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return consultingService.reserve(reserve);
    }

    @GetMapping("/realtors")
    public ResponseEntity<?> reservationListByRealtor(@RequestParam Long realtorNo, @RequestParam int situation) {
        return consultingService.reservationListByRealtor(realtorNo, situation);
    }

    @GetMapping("/users")
    public ResponseEntity<?> reservationListByUser(@RequestParam Long userNo, @RequestParam int situation) {
        return consultingService.reservationListByUser(userNo, situation);
    }

    @PatchMapping
    public ResponseEntity<?> changeStatus(@RequestHeader(AUTHORIZATION) String token, @RequestBody ConsultingRequest.ChangeStatus request) {
        return consultingService.changeStatus(token, request);
    }

    @GetMapping("/{consultingNo}")
    public ResponseEntity<?> detailReservation(@PathVariable Long consultingNo) {
        return consultingService.detailReservation(consultingNo);
    }

    @PostMapping("/items")
    public ResponseEntity<?> addConsultingItems(@RequestBody ConsultingRequest.AddItem addItem)  {
        return consultingService.addConsultingItems(addItem);
    }
}
