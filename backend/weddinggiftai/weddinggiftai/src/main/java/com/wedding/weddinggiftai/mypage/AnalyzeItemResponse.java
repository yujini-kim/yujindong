package com.wedding.weddinggiftai.mypage;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
public class AnalyzeItemResponse {
    private String text;
    private int score;
    private String recommendation;
    private String summary;
    private LocalDateTime createdAt;
}
