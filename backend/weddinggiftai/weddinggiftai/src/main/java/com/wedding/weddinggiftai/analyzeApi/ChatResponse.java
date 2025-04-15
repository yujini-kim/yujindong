package com.wedding.weddinggiftai.analyzeApi;


import lombok.Getter;
import lombok.Setter;

@Getter
public class ChatResponse {
    private int score;
    private String recommendation;
    private boolean success;
    private String message;
    private String summary;
    private String cleanText;


    public ChatResponse(int score,
                        String recommendation,
                        boolean success,
                        String message,
                        String summary,
                        String cleanText) {
        this.score = score;
        this.recommendation = recommendation;
        this.success = success;
        this.message = message;
        this.summary = summary;
        this.cleanText = cleanText;
    }

}