package com.ssafy.live.contract.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.contract.controller.dto.ContractRequest;
import com.ssafy.live.contract.service.ContractService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequiredArgsConstructor
@RestController
@RequestMapping("/contracts")
public class ContractController {

    private final ContractService contractService;

    @PostMapping
    public ResponseEntity<?> regist(@Validated @RequestBody ContractRequest.Regist regist, Errors errors)  {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return contractService.regist(regist);
    }

    @GetMapping
    public ResponseEntity<?> contractList(@RequestHeader(AUTHORIZATION) String token, @RequestParam int status)  {
        return contractService.contractList(token, status);
    }
}
