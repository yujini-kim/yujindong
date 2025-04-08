package com.wedding.weddinggiftai;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/redis-test")
@RequiredArgsConstructor
public class RedisTestController {
    private final RedisTemplate<String,String> redisTemplate;

    @GetMapping("/set")
    public String setValue(@RequestParam String key,@RequestParam String value){
        redisTemplate.opsForValue().set(key,value);
        return "저장완료 : " +key+" = "+value;
    }

    @GetMapping("/get")
    public String getValue(@RequestParam String key){
        String value = redisTemplate.opsForValue().get(key);
        return "값: " + value;
    }
}
