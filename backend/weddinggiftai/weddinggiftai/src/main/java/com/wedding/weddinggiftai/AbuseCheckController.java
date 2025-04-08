package com.wedding.weddinggiftai;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;

@RestController
@RequiredArgsConstructor
public class AbuseCheckController {
    private final RedisTemplate<String,String>  redisTemplate;

    @GetMapping("/api/api/analyze")
    public String analyze(HttpServletRequest request){
        String ip = request.getRemoteAddr();
        String key = "ip:" + ip;
        String countStr = redisTemplate.opsForValue().get(key);
        int count = countStr != null ? Integer.parseInt(countStr) : 0;

        if (count >= 10) {
            return "오늘 분석 요청이 너무 많았습니다.";
        }

        redisTemplate.opsForValue().increment(key);

        if  (count ==0 ){
            redisTemplate.expire(key, Duration.ofDays(1));
        }

        return "분석 요청 성공! (요청 횟수: " + redisTemplate.opsForValue().get(key) + ")";
    }
}
