package com.wedding.weddinggiftai.analyzeApi;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;

@RequiredArgsConstructor
@Service
public class RedisService {
    private final RedisTemplate<String,String> redisTemplate;

    public boolean isOverLimit(String ip){
        String key = "ip" + ip;
        String countStr =  redisTemplate.opsForValue().get(key);
        int count = countStr != null ? Integer.parseInt(countStr) : 0;

        return count >= 30;
    }

    public void increaseCount(String ip){
        String key = "ip" + ip;

        String countStr = redisTemplate.opsForValue().get(key);
        int count = countStr != null ? Integer.parseInt(countStr) : 0 ;

        redisTemplate.opsForValue().increment(key);
        if(count == 0){
            redisTemplate.expire(key, Duration.ofDays(1));
        }
    }
}

