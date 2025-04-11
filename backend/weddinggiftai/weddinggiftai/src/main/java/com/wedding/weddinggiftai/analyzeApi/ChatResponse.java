package com.wedding.weddinggiftai.analyzeApi;


import lombok.Getter;

@Getter
public class ChatResponse {
    private int score;
    private String recommendation;
    private boolean success;
    private String message;
    private String summary;


    public ChatResponse(int score,
                        String recommendation,
                        boolean success,
                        String message,
                        String summary) {
        this.score = score;
        this.recommendation = recommendation;
        this.success = success;
        this.message = message;
        this.summary = summary;
    }

}