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
    public ResponseEntity<?> contractList(Authentication authentication, @RequestParam int status)  {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        return contractService.contractList(principal, status);
    }

    @GetMapping("/{contractNo}")
    public ResponseEntity<?> contractDetail(@PathVariable("contractNo") Long contractNo)  {
        return contractService.contractDetail(contractNo);
    }

    @PatchMapping("/{contractNo}")
    public ResponseEntity<?> contractUpdate(@RequestBody ContractRequest.Update update,  @PathVariable("contractNo") Long contractNo)  {
        return contractService.contractUpdate(update, contractNo);
    }

    @PatchMapping("/{contractNo}/confirm")
    public ResponseEntity<?> contractApprove(@PathVariable("contractNo") Long contractNo)  {
        return contractService.contractApprove(contractNo);
    }

    @PatchMapping("/{contractNo}/complete")
    public ResponseEntity<?> contractComplete(@PathVariable("contractNo") Long contractNo)  {
        return contractService.contractComplete(contractNo);
    }
}
