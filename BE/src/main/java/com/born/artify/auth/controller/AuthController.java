package com.born.artify.auth.controller;

import com.born.artify.auth.dto.LoginReqDTO;
import com.born.artify.auth.dto.TokenResDTO;
import com.born.artify.auth.service.AuthService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<Map<String, Object>>login(@RequestBody LoginReqDTO request) {
        TokenResDTO token = authService.login(request);

        Map<String, Object> result = new HashMap<>();
        result.put("status", 200);
        result.put("msg", "성공적으로 가입되었습니다.");

        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + token.getAccessToken())
                .header("Refresh-Token", token.getRefreshToken())
                .body(result);
    }
}
