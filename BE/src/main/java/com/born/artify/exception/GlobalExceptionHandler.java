package com.born.artify.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>>  handleIllegalArgument(IllegalArgumentException ex){
        Map<String, Object> error = new HashMap<>();
        error.put("error", ex.getMessage());
        error.put("status", 401);
        return ResponseEntity.badRequest().body(error);
    }
}