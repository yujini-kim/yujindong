package com.wedding.weddinggiftai.admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AdminMemberResponse {
    private Long id;
    private String display_name;
    private String username;
    private String email;
    private int analyzeCount;
}
