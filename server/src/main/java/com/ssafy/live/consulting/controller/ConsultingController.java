package com.ssafy.live.consulting.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.consulting.service.ConsultingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/consultings")
public class ConsultingController {

    private final ConsultingService consultingService;

    @PostMapping
    public ResponseEntity<?> reserve(Authentication authentication, @Validated @RequestBody ConsultingRequest.Reserve reserve, Errors errors)  {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.reserve(principal, reserve);
    }

    @GetMapping
    public ResponseEntity<?> reservationList(Authentication authentication, @RequestParam int situation) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.reservationListByRealtor(principal, situation);
    }

    @PatchMapping
    public ResponseEntity<?> changeStatus(Authentication authentication, @RequestBody ConsultingRequest.ChangeStatus request) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.changeStatus(principal, request);
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
    public ResponseEntity<?> infoForContact(Authentication authentication, @PathVariable Long itemNo)  {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.infoForContact(principal, itemNo);
    }
}
