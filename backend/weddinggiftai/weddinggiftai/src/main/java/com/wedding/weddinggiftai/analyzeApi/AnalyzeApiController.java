package com.wedding.weddinggiftai.analyzeApi;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalyzeApiController {
    private final AnalyzeApiService analyzeApiService;

    @PostMapping("/analyze")
    public ChatResponse analyze(@RequestBody ChatRequest request){
        int score = analyzeApiService.calculateScore(request.getText());
        String recommendation = analyzeApiService.getRecommendation(score);

        return new ChatResponse(score,recommendation);
    }


}