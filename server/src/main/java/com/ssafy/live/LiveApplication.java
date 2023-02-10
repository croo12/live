package com.ssafy.live;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableJpaAuditing
@EnableScheduling
@SpringBootApplication
public class LiveApplication {

    public static void main(String[] args) {
        SpringApplication.run(LiveApplication.class, args);
    }

}
