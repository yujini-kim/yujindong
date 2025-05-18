package com.wedding.weddinggiftai.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class VerifyResponse {
    private String username;
    private String message;
    private boolean isAdmin;
}
