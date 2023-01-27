package com.ssafy.live.account.common;

import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no;

    private String password;
    private String name;
    private String email;
    private String phone;

    @Column(name = "image_src")
    private String imageSrc;

    protected void updateInformation(String name, String phone, String imageSrc) {
        this.name = name;
        this.phone = phone;
        this.imageSrc = imageSrc;
    }
}
