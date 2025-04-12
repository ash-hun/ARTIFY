package com.born.artify.domain.user.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUserDTO {

    @NotBlank(message = "이름을 입력해주세요.")
    private String username;

    @Email(message = "올바른 이메일 형식을 입력해주세요.")
    @NotBlank(message = "이메일을 입력해주세요.")
    private String email;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String password;

    public String getEmail() {
        return email;
    }

    public String getUserName() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}