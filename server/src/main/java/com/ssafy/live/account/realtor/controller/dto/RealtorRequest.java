package com.ssafy.live.account.realtor.controller.dto;

import com.ssafy.live.account.common.domain.Authority;
import com.ssafy.live.account.realtor.domain.entity.Realtor;
import java.time.LocalDate;
import java.util.Collections;
import javax.validation.constraints.NotEmpty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class RealtorRequest {

    @Getter
    @Setter
    @Builder
    public static class SignUp {

        @NotEmpty(message = "사업자 번호는 필수 입력값입니다.")
        private String businessNumber;
        @NotEmpty(message = "비밀번호는 필수 입력값입니다.")
        private String password;
        @NotEmpty(message = "이메일은 필수 입력값입니다.")
        private String email;
        private String name;
        private String phone;
        private String corp;
        private String registrationNumber;
        private String description;
        private String businessAddress;
        private LocalDate startDate;

        public static Realtor toEntity(SignUp realtor, String imgSrc, String password) {
            return Realtor.builder()
                .password(password)
                .name(realtor.getName())
                .email(realtor.getEmail())
                .phone(realtor.getPhone())
                .corp(realtor.getCorp())
                .description(realtor.getDescription())
                .businessNumber(realtor.getBusinessNumber())
                .businessAddress(realtor.getBusinessAddress())
                .startDate(realtor.getStartDate())
                .registrationNumber(realtor.getRegistrationNumber())
                .roles(Collections.singletonList(Authority.REALTOR.name()))
                .imageSrc(imgSrc)
                .build();
        }
    }

    @Getter
    @Setter
    public static class Login {

        @NotEmpty(message = "사업자 번호는 필수 입력값입니다.")
        private String businessNumber;
        @NotEmpty(message = "비밀번호는 필수 입력값입니다.")
        private String password;

        public UsernamePasswordAuthenticationToken toAuthentication() {
            return new UsernamePasswordAuthenticationToken(businessNumber, password);
        }
    }

    @Getter
    @Setter
    public static class Reissue {

        @NotEmpty(message = "accessToken 을 입력해주세요.")
        private String accessToken;
        @NotEmpty(message = "refreshToken 을 입력해주세요.")
        private String refreshToken;
    }

    @Getter
    @Setter
    public static class withdrawl {

        @NotEmpty(message = "해당하는 realtor_no가 없습니다.")
        private Long no;
    }

    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Update {

        private String phone;
        private String password;
        private String description;
        private String email;
        private String imageSrc;
    }

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PROTECTED)
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class FindPassword {

        private String businessNumber;
        private String email;
    }
}
