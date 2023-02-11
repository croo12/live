package com.ssafy.live.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://live-live.store", "https://localhost", "https://localhost:3000", "http://localhost", "http://localhost:3000")
                .allowedMethods("GET","POST","PUT","DELETE","PATHCH")
                .allowCredentials(true);
    }
}