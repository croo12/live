package com.ssafy.live.consulting.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.consulting.service.ConsultingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<?> changeStatus(@RequestBody ConsultingRequest.ChangeStatus request) {
        return consultingService.changeStatus(request);
    }

    @GetMapping("/{consultingNo}")
    public ResponseEntity<?> detailReservation(@PathVariable Long consultingNo) {
        return consultingService.detailReservation(consultingNo);
    }

    @PostMapping("/items")
    public ResponseEntity<?> addConsultingItems(@Validated @RequestBody ConsultingRequest.AddItem addItem, Errors errors)  {
        // validation check
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return consultingService.addConsultingItems(addItem);
    }
}
