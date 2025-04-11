package com.wedding.weddinggiftai.analyzeApi;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AnalyzeApiController {
    private final AnalyzeApiService analyzeApiService;
    private final RedisTemplate<String,String> redisTemplate;

    @PostMapping("/analyze")
    public ChatResponse analyze(@RequestBody ChatRequest request, HttpServletRequest httpRequest){
        String ip = httpRequest.getRemoteAddr();
        String key = "ip" + ip;

        String countStr = redisTemplate.opsForValue().get(key);
        int count = countStr != null ? Integer.parseInt(countStr) : 0;

        if (count >= 10) {
            return new ChatResponse(0,"",false,"오늘 10회 모두 사용하셨습니다.","");
        }

        redisTemplate.opsForValue().increment(key);
        if (count == 0) {
            redisTemplate.expire(key, Duration.ofDays(1));
        }


        return analyzeApiService.analyzeWithSummary(request.getText());
    }


}