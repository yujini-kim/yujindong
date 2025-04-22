package com.wedding.weddinggiftai.analyzeApi;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
public class ResultResponse {
    private final String text;
    private final int score;
    private final String recommendation;
    private final String summary;
    private final String friendName;
    private final LocalDateTime createdAt;

    public ResultResponse(AnalyzeApi entity) {
        this.text = entity.getText();
        this.score = entity.getScore();
        this.recommendation = entity.getRecommendation();
        this.summary = entity.getSummary();
        this.friendName = entity.getFriend_name();
        this.createdAt = entity.getCreatedAt();
    }
}
