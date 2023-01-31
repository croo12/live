package com.ssafy.live.account.auth.config;

import com.ssafy.live.account.auth.jwt.CustomAuthenticationRealtorProvider;
import com.ssafy.live.account.auth.jwt.JwtAuthenticationFilter;
import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.realtor.service.CustomRealtorDetailService;
import com.ssafy.live.account.user.service.CustomUserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@EnableWebSecurity
public class RealtorSecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;
    private final CustomRealtorDetailService customRealtorDetailService;
    private final RealtorRepository realtorRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthenticationRealtorProvider customAuthenticationRealtorProvider;
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .requestMatchers()
                .antMatchers("/api/v1/realtors/**")
                .and()
                .authorizeRequests()
                //.antMatchers("/api/v1/users/sign-up", "/api/v1/users/login", "/api/v1/users/authority", "/api/v1/users/reissue", "/api/v1/users/logout").permitAll()
                .antMatchers("/api/v1/realtors/login", "/api/v1/realtors/authority", "/api/v1/realtors/reissue", "/api/v1/realtors/logout").permitAll()
                .antMatchers("/api/v1/users/userTest").hasRole("USER")
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisTemplate), UsernamePasswordAuthenticationFilter.class);
        // JwtAuthenticationFilter를 UsernamePasswordAuthentictaionFilter 전에 적용시킨다.
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //auth.inMemoryAuthentication().withUser("realtor").password("realtor").roles("REALTOR");
        //auth.userDetailsService(new CustomRealtorDetailService(realtorRepository)).passwordEncoder(passwordEncoder);
        auth.authenticationProvider(customAuthenticationRealtorProvider);
        auth.userDetailsService(customRealtorDetailService).passwordEncoder(passwordEncoder);
    }


}