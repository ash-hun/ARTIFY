package com.born.artify.auth.handler;

import com.born.artify.config.JwtProvider;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {

    private final JwtProvider jwtTokenProvider;
    //private final RestTemplate restTemplate; // GitHub API 호출을 위한 RestTemplate

    public OAuth2LoginSuccessHandler(JwtProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
        //this.restTemplate = restTemplate;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        // OAuth2User 정보 추출
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = oAuth2User.getAttribute("email");
        // JWT 생성
        String accessToken = jwtTokenProvider.createAccessToken(email);
        String refreshToken = jwtTokenProvider.createRefreshToken(email);

        System.out.println("accessToken: " + accessToken);

        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh-Token", refreshToken);
        response.sendRedirect("/main");
    }
}