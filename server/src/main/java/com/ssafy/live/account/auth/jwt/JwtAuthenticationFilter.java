package com.ssafy.live.account.auth.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.live.common.domain.Response;
import io.jsonwebtoken.ExpiredJwtException;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Slf4j
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_TYPE = "Bearer";

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate redisTemplate;

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
        FilterChain chain) throws IOException, ServletException {
        try {
            String path = request.getServletPath();
            if (path.endsWith("reissue")) { // 토큰을 재발급하는 API 경우 토큰 체크 로직 건너뛰기
                chain.doFilter(request, response);
            } else {
                // 1. Request Header 에서 JWT 토큰 추출
                String accessToken = resolveToken(request);
                boolean isTokenValid = jwtTokenProvider.validateToken(accessToken);

                // 2. validateToken 으로 토큰 유효성 검사
                if (StringUtils.hasText(accessToken) && isTokenValid) {
                    // (추가) Redis 에 해당 accessToken logout 여부 확인
                    String isLogout = (String) redisTemplate.opsForValue().get(accessToken);
                    if (ObjectUtils.isEmpty(isLogout)) {
                        // 토큰이 유효할 경우 토큰에서 Authentication 객체를 가지고 와서 SecurityContext 에 저장
                        Authentication authentication = jwtTokenProvider.getAuthentication(
                            accessToken);
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
                chain.doFilter(request, response);
            }
        } catch (ExpiredJwtException e) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType("application/json;charset=UTF-8");
            response.getWriter().write(new ObjectMapper().writeValueAsString(Response.reissue()));
            response.getWriter().flush();
        }
    }

    // Request Header 에서 토큰 정보 추출
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_TYPE)) {
            return bearerToken.substring(7);
        }
        return null;
    }

}
