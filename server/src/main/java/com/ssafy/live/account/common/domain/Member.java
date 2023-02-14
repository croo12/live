package com.ssafy.live.account.common.domain;

import java.security.SecureRandom;
import java.util.stream.Collectors;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no;

    private String password;
    private String name;
    private String email;
    private String phone;

    @Column(name = "image_src")
    private String imageSrc;

    protected void updateInformation(String password, String phone, String email, String imageSrc) {
        this.password = password;
        this.phone = phone;
        this.email = email;
        this.imageSrc = imageSrc;
    }

    public String generateRandomPassword() {
        int len = 10;
        int randNumOrigin = 97, randNumBound = 122;
        SecureRandom random = new SecureRandom();
        return random.ints(len, randNumOrigin, randNumBound + 1)
            .mapToObj(i -> String.valueOf((char) i))
            .collect(Collectors.joining());
    }

    public void updatePassword(String temporaryPassword) {
        this.password = temporaryPassword;
    }

}
