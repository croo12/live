package com.ssafy.live.consulting.controller;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<?> detailReservation(@RequestHeader(AUTHORIZATION) String token, @PathVariable Long consultingNo) {
        return consultingService.detailReservation(token, consultingNo);
    }

    @PostMapping("/{consultingNo}/items")
    public ResponseEntity<?> addConsultingItems(@RequestHeader(AUTHORIZATION) String token, @PathVariable Long consultingNo, @RequestBody ConsultingRequest.AddItem addItem)  {
        return consultingService.addConsultingItems(token, consultingNo, addItem);
    }
}
