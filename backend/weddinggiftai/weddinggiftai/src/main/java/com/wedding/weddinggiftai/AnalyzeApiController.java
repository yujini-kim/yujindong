package com.wedding.weddinggiftai;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AnalyzeApiController {

    @PostMapping("/analyze")
    public ChatResponse analyze(@RequestBody ChatRequest request) {
        String text = request.getText();

        // 예시 분석 로직 (나중에 GPT 연동 가능)
        int score = calculateScore(text);
        String recommendation = getRecommendation(score);

        return new ChatResponse(score, recommendation);
    }

    private int calculateScore(String text) {
        int length = text.length();
        if (length < 10) return 10;
        if (length < 50) return 30;
        if (length < 100) return 60;
        if (length < 200) return 80;
        return 95;
    }

    private String getRecommendation(int score) {
        if (score <= 10) return "0원";
        if (score <= 30) return "1만원";
        if (score <= 50) return "3만원";
        if (score <= 70) return "5만원";
        if (score <= 85) return "7만원";
        return "10만원";
    }
}