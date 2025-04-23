package com.wedding.weddinggiftai.mypage;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class AnalyzeItemResponse {
    private int index;
    private String text;
    private int score;
    private String recommendation;
    private String summary;
    private LocalDateTime createdAt;
    private String friend_name;
}
