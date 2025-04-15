package com.wedding.weddinggiftai.analyzeApi;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalyzeApiController {
    private final AnalyzeApiService analyzeApiService;
    private final RedisTemplate<String,String> redisTemplate;
    private final RedisService redisService;
    private final AnalyzeApiRepository analyzeApiRepository;

    @PostMapping("/analyze")
    public ChatResponse analyze(@RequestBody ChatRequest request, HttpServletRequest httpRequest){
        String ip = httpRequest.getRemoteAddr();

        if (redisService.isOverLimit(ip)) {
            return new ChatResponse(0,"0원",false,"오늘 10회 모두 사용하셨습니다.","","");
        }
        redisService.increaseCount(ip);

        ChatResponse analyze = analyzeApiService.analyzeWithSummary(request.getText());
        analyzeApiService.SaveAnalyzeResult(ip,analyze.getCleanText(),analyze);

        return analyze;
    }


}