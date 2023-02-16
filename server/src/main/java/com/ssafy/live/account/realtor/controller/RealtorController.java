package com.ssafy.live.account.realtor.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.account.realtor.controller.dto.RealtorRequest;
import com.ssafy.live.account.realtor.service.RealtorService;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/realtors")
public class RealtorController {

    private final RealtorService realtorService;

    @PostMapping
    public ResponseEntity<?> signUp(
        @Validated @RequestPart(value = "SignUp") RealtorRequest.SignUp signUp, Errors errors,
        @RequestPart(value = "file", required = false) MultipartFile uploadFile)
        throws IOException {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.signUp(signUp, uploadFile);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated @RequestBody RealtorRequest.Login login,
        Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.login(login);
    }

    @PostMapping("/reissue")
    public ResponseEntity<?> reissue(@Validated @RequestBody RealtorRequest.Reissue reissue,
        Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return realtorService.reissue(reissue);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(Authentication authentication) {
        return realtorService.logout(authentication);
    }

    @DeleteMapping
    public ResponseEntity<?> withdrawl(Authentication authentication) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return realtorService.withdrawl(principal);
    }

    @GetMapping("/authority")
    public ResponseEntity<?> authority() {
        return realtorService.authority();
    }

    @PostMapping("/info")
    public ResponseEntity<?> updateRealtor(Authentication authentication,
        @RequestPart(value = "Update") RealtorRequest.Update request,
        @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return realtorService.updateRealtor(principal, request, file);
    }

    @PostMapping("/passcheck")
    public ResponseEntity<?> temporaryPassword(@RequestBody RealtorRequest.FindPassword request) {
        return realtorService.temporaryPassword(request);
    }

    @GetMapping
    public ResponseEntity<?> findRealtorDetail(Authentication authentication) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return realtorService.findRealtorDetail(principal);
    }

    @GetMapping("/{realtorNo}/consultings")
    public ResponseEntity<?> findRealtorDetailByRegion(@PathVariable("realtorNo") Long realtorNo,
        @RequestParam("regionCode") String regionCode) {
        return realtorService.findRealtorDetailByRegion(realtorNo, regionCode);
    }

    @GetMapping("/region")
    public ResponseEntity<?> findRealtorByRegion(@RequestParam("regionCode") String regionCode) {
        return realtorService.findDistinctRealtorWithItemsByHouseByRegion(regionCode);
    }

    @GetMapping("/popular")
    public ResponseEntity<?> findRealtorList(@RequestParam int orderBy) {
        return realtorService.findRealtorList(orderBy);
    }
}
