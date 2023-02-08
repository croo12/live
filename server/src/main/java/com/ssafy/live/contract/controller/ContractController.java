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

    @GetMapping("/{contractNo}")
    public ResponseEntity<?> contractDetail(@RequestHeader(AUTHORIZATION) String token, @PathVariable("contractNo") Long contractNo)  {
        return contractService.contractDetail(token, contractNo);
    }

    @PatchMapping("/{contractNo}")
    public ResponseEntity<?> contractUpdate(@RequestHeader(AUTHORIZATION) String token, @RequestBody ContractRequest.Update update,  @PathVariable("contractNo") Long contractNo)  {
        return contractService.contractUpdate(token, update, contractNo);
    }

    @PatchMapping("/{contractNo}/confirm")
    public ResponseEntity<?> contractApprove(@RequestHeader(AUTHORIZATION) String token, @PathVariable("contractNo") Long contractNo)  {
        return contractService.contractApprove(token, contractNo);
    }

    @PatchMapping("/{contractNo}/complete")
    public ResponseEntity<?> contractComplete(@RequestHeader(AUTHORIZATION) String token, @PathVariable("contractNo") Long contractNo)  {
        return contractService.contractComplete(token, contractNo);
    }
}
