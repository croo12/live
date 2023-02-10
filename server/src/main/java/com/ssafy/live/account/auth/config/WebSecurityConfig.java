package com.ssafy.live.account.auth.config;

import com.ssafy.live.account.auth.jwt.JwtAuthenticationFilter;
import com.ssafy.live.account.auth.jwt.JwtTokenProvider;
import com.ssafy.live.account.auth.jwt.RealtorsProvider;
import com.ssafy.live.account.auth.jwt.UsersProvider;
import com.ssafy.live.account.realtor.service.CustomRealtorDetailService;
import com.ssafy.live.account.user.service.CustomUserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@RequiredArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;
    private final CustomUserDetailService customUserDetailService;
    private final UsersProvider usersProvider;
    private final CustomRealtorDetailService customRealtorDetailService;
    private final RealtorsProvider realtorsProvider;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
            .httpBasic().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .authorizeRequests()
                .antMatchers("/users", "/users/login", "/users/id", "/realtors", "/realtors/login", "/realtors/id").permitAll()
            .antMatchers("/users/info", "/users/passcheck", "/users/").hasAuthority("USER")
            .antMatchers("realtors/region", "/realtors/{realtorNo}", "/realtors/info", "/realtors/passcheck", "/realtors/{realtorNo}/consultings").hasAuthority("REALTOR")
            .antMatchers("/consultings/**").permitAll()
            .and()
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, redisTemplate), UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(usersProvider);
        auth.userDetailsService(customUserDetailService).passwordEncoder(passwordEncoder());
        auth.authenticationProvider(realtorsProvider);
        auth.userDetailsService(customRealtorDetailService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}
