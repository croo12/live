package com.ssafy.live.consulting.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.consulting.controller.dto.ConsultingRequest;
import com.ssafy.live.consulting.service.ConsultingService;
import java.io.IOException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.support.ResourceRegion;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/consultings")
public class ConsultingController {

    @Value("${com.example.upload.path}")
    private String uploadPath;
    private final ConsultingService consultingService;

    @PostMapping
    public ResponseEntity<?> reserve(Authentication authentication,
        @Validated @RequestBody ConsultingRequest.Reserve reserve, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.reserve(principal, reserve);
    }

    @GetMapping
    public ResponseEntity<?> reservationList(Authentication authentication,
        @RequestParam int situation) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.reservationListByRealtor(principal, situation);
    }

    @GetMapping("/today")
    public ResponseEntity<?> todayList(Authentication authentication) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.todayList(principal);
    }

    @PatchMapping
    public ResponseEntity<?> changeStatus(Authentication authentication,
        @RequestBody ConsultingRequest.ChangeStatus request) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.changeStatus(principal, request);
    }

    @GetMapping("/{consultingNo}")
    public ResponseEntity<?> detailReservation(@PathVariable Long consultingNo) {
        return consultingService.detailReservation(consultingNo);
    }

    @PostMapping("/{consultingNo}/items")
    public ResponseEntity<?> addConsultingItems(@PathVariable Long consultingNo,
        @RequestBody ConsultingRequest.AddItem addItem) {
        return consultingService.addConsultingItems(consultingNo, addItem);
    }

    @GetMapping("/contracts/{itemNo}")
    public ResponseEntity<?> infoForContact(Authentication authentication,
        @PathVariable Long itemNo) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return consultingService.infoForContact(principal, itemNo);
    }

    @PostMapping("/{consultingNo}")
    public ResponseEntity<?> consultingLink(@PathVariable Long consultingNo,
        @RequestBody ConsultingRequest.AddLink link) {
        return consultingService.consultingLink(consultingNo, link);
    }

    @PostMapping("/{consultingNo}/records")
    public ResponseEntity<?> saveRec(
        @PathVariable Long consultingNo,
        @RequestPart List<MultipartFile> records) {
        return consultingService.saveRec(consultingNo, records);
    }

    @GetMapping("/{consultingNo}/records")
    public ResponseEntity<?> getRecList(@PathVariable Long consultingNo) {
        return consultingService.getRecList(consultingNo);
    }

    @GetMapping(value = "/records/{recordNo}")
    public ResponseEntity<ResourceRegion> streamRecord(@RequestHeader HttpHeaders headers,
        @PathVariable Long recordNo) throws IOException {
        return consultingService.streamRecord(headers, recordNo);
    }
}
