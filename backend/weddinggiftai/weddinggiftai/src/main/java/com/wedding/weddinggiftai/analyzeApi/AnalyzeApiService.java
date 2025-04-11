package com.wedding.weddinggiftai.analyzeApi;

import com.wedding.weddinggiftai.gpt.GptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnalyzeApiService {
    private final GptService gptService;

    public String extractMessageOnly(String kakaoText) {
        // 정규식: [이름] [시간] 제거
        return kakaoText.replaceAll("\\[.*?] \\[.*?] ", "");
    }

    public int calculateScore(String text) {
        String cleanText = extractMessageOnly(text);
        if (cleanText.length() > 1000) {
            cleanText = cleanText.substring(cleanText.length() - 1000);
        }
        String prompt = "다음 대화 내용을 보고 친밀도를 0~100으로 숫자로만 대답해줘 :\n"+cleanText;
        String answer = gptService.askGpt(prompt);
        System.out.println("GPT 응답: " + answer);

        try {
            return Integer.parseInt(answer.replaceAll("[^0-9]", ""));
        } catch (Exception e) {
            return 50; // 실패했을 때 기본값
        }

    }

    public String getRecommendation(int score) {
        if (score <= 20) return "0원";
        if (score <= 40) return "5만원";
        if (score <= 60) return "7만원";
        if (score <= 80) return "10만원";
        if (score <= 95) return "15만원";
        return "20만원 이상";
    }
}
