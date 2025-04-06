package com.born.artify.auth.service;

import com.born.artify.auth.dto.LoginReqDTO;
import com.born.artify.auth.dto.TokenResDTO;
import com.born.artify.config.JwtProvider;
import com.born.artify.domain.user.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.born.artify.domain.user.entity.User;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, JwtProvider jwtProvider, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
        this.passwordEncoder = passwordEncoder;
    }

    public TokenResDTO login(LoginReqDTO req) {
        User user = userRepository.findByEmail(req.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("이메일 또는 비밀번호가 올바르지 않습니다."));

        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("이메일 또는 비밀번호가 올바르지 않습니다.");
        }

        String accessToken = jwtProvider.createAccessToken(user.getEmail());
        String refreshToken = jwtProvider.createRefreshToken(user.getEmail());

        // 필요하다면 refreshToken DB 저장도 여기서 처리

        return new TokenResDTO(accessToken, refreshToken);
    }
}