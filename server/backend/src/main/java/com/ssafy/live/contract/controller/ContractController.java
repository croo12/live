package com.ssafy.live.contract.controller;

import com.ssafy.live.account.common.error.ErrorHandler;
import com.ssafy.live.contract.controller.dto.ContractRequest;
import com.ssafy.live.contract.service.ContractService;
import lombok.RequiredArgsConstructor;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/contracts")
public class ContractController {

    private final ContractService contractService;

    @PostMapping
    public ResponseEntity<?> regist(@Validated @RequestBody ContractRequest.Regist regist,
        Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ErrorHandler.refineErrors(errors));
        }
        return contractService.regist(regist);
    }

    @GetMapping
    public ResponseEntity<?> contractList(Authentication authentication, @RequestParam int status) {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return contractService.contractList(principal, status);
    }

    @GetMapping("/{contractNo}")
    public ResponseEntity<?> contractDetail(@PathVariable("contractNo") Long contractNo) {
        return contractService.contractDetail(contractNo);
    }

    @PatchMapping("/{contractNo}")
    public ResponseEntity<?> contractUpdate(@RequestBody ContractRequest.Update update,
        @PathVariable("contractNo") Long contractNo) {
        return contractService.contractUpdate(update, contractNo);
    }

    @PatchMapping("/{contractNo}/{status}")
    public ResponseEntity<?> contractChangeStatus(@PathVariable("contractNo") Long contractNo,
        @PathVariable("status") int status) {
        return contractService.contractChangeStatus(contractNo, status);
    }
}
