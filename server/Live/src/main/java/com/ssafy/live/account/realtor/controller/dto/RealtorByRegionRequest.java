package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.realtor.domain.entity.Realtor;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RealtorByRegionRequest {

    private String name;
    private String phone;
    private String corp;
    private String description;
    private String businessAddress;
    private String imageSrc;

    @Builder
    public RealtorByRegionRequest(Realtor realtor) {
        this.name = realtor.getName();
        this.phone = realtor.getPhone();
        this.corp = realtor.getCorp();
        this.description = realtor.getDescription();
        this.businessAddress = realtor.getBusinessAddress();
        this.imageSrc = realtor.getImageSrc();
    }
}
