package com.ssafy.live.account.realtor.controller.dto;

import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

public class RealtorRequest {

    @Getter
    @Setter
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
        @Column(columnDefinition = "TEXT")
        private String filePath;
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
    public static class Logout {
        @NotEmpty(message = "잘못된 요청입니다.")
        private String accessToken;

        @NotEmpty(message = "잘못된 요청입니다.")
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
