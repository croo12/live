package com.ssafy.live.contract.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.contract.controller.dto.ContractRequest;
import com.ssafy.live.contract.service.ContractService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
