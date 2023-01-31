package com.ssafy.live.account.auth.config;

import com.ssafy.live.account.auth.jwt.CustomAuthenticationProvider;
import com.ssafy.live.account.auth.jwt.JwtAuthenticationFilter;
import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.realtor.domain.repository.RealtorRepository;
import com.ssafy.live.account.realtor.service.CustomRealtorDetailService;
import com.ssafy.live.account.user.domain.repository.UsersRepository;
import com.ssafy.live.account.user.service.CustomUserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
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
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;
    private final UsersRepository usersRepository;
    private final CustomUserDetailService customUserDetailService;
    private final CustomAuthenticationProvider customAuthenticationProvider;
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .requestMatchers()
                .antMatchers("/users/**")
                .and()
                .authorizeRequests()
                .antMatchers("/users/sign-up", "/users/login", "/users/authority", "/users/reissue", "/users/logout").permitAll()
                //.antMatchers("/api/v1/realtors/login", "/api/v1/realtors/authority", "/api/v1/realtors/reissue", "/api/v1/realtors/logout").permitAll()
                .antMatchers("/users/userTest").hasRole("USER")
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisTemplate), UsernamePasswordAuthenticationFilter.class);
        // JwtAuthenticationFilter를 UsernamePasswordAuthentictaionFilter 전에 적용시킨다.
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       // auth.inMemoryAuthentication().withUser("user").password("user").roles("USER");
      //  auth.userDetailsService(new CustomUserDetailService(usersRepository)).passwordEncoder(passwordEncoder());;
        auth.authenticationProvider(customAuthenticationProvider);
        auth.userDetailsService(customUserDetailService).passwordEncoder(passwordEncoder());
    }

    // 암호화에 필요한 PasswordEncoder Bean 등록
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}