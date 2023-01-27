package com.ssafy.live.account.realtor.controller.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorFindPasswordRequest {

    private String businessNumber;
    private String email;
}