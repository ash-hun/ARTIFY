package com.born.artify.domain.user.controller;
import com.born.artify.domain.user.dto.CreateUserDTO;
import com.born.artify.domain.user.service.UserService;
import com.born.artify.domain.user.entity.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Controller
//@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 이거 삭제?
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/auth/signup")
    public ResponseEntity<Map<String, Object>> signUp(@Valid @RequestBody CreateUserDTO request) {
        System.out.println(request);
        User newUser = userService.createUser(request);

        Map<String, Object> result = new HashMap<>();
        result.put("status", 200);
        result.put("msg", "성공적으로 가입되었습니다.");

        return ResponseEntity.ok().body(result);
    }
}