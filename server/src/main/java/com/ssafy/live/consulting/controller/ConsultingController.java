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
    public ResponseEntity<?> reserve(@RequestHeader(AUTHORIZATION) String token, @Validated @RequestBody ConsultingRequest.Reserve reserve, Errors errors)  {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return consultingService.reserve(token, reserve);
    }

    @GetMapping
    public ResponseEntity<?> reservationList(@RequestHeader(AUTHORIZATION) String token, @RequestParam int situation) {
        return consultingService.reservationListByRealtor(token, situation);
    }

    @PatchMapping
    public ResponseEntity<?> changeStatus(@RequestHeader(AUTHORIZATION) String token, @RequestBody ConsultingRequest.ChangeStatus request) {
        return consultingService.changeStatus(token, request);
    }

    @GetMapping("/{consultingNo}")
    public ResponseEntity<?> detailReservation(@PathVariable Long consultingNo) {
        return consultingService.detailReservation(consultingNo);
    }

    @PostMapping("/{consultingNo}/items")
    public ResponseEntity<?> addConsultingItems(@PathVariable Long consultingNo, @RequestBody ConsultingRequest.AddItem addItem)  {
        return consultingService.addConsultingItems(consultingNo, addItem);
    }

    @GetMapping("/contracts/{itemNo}")
    public ResponseEntity<?> infoForContact(@RequestHeader(AUTHORIZATION) String token, @PathVariable Long itemNo)  {
        return consultingService.infoForContact(token, itemNo);
    }
}
