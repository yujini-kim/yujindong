package com.wedding.weddinggiftai.member;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberRequest {
    private String username;
    private String password;
    private String displayName;
    private String email;
}
