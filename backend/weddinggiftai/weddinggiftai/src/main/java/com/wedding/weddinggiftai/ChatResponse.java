package com.wedding.weddinggiftai;

public class ChatResponse {
    private int score;
    private String recommendation;

    public ChatResponse(int score, String recommendation) {
        this.score = score;
        this.recommendation = recommendation;
    }

    public int getScore() {
        return score;
    }

    public String getRecommendation() {
        return recommendation;
    }
}