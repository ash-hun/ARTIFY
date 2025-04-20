package com.born.artify.auth.dto;

import lombok.Data;

@Data
public class LoginReqDTO {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}
