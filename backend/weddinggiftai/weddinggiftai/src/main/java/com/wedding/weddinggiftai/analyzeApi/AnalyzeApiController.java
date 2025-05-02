package com.wedding.weddinggiftai.analyzeApi;

import com.wedding.weddinggiftai.member.Member;
import com.wedding.weddinggiftai.member.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class AnalyzeApiController {
    private final AnalyzeApiService analyzeApiService;
    private final RedisService redisService;
    private final MemberRepository memberRepository;

    @PostMapping("/analyze")
    public ChatResponse analyze(@RequestBody ChatRequest request, HttpServletRequest httpRequest, @AuthenticationPrincipal Member member){
        String ip = httpRequest.getRemoteAddr();

        if (redisService.isOverLimit(ip)) {
            return new ChatResponse(0,"0원",false,"오늘 10회 모두 사용하셨습니다.","","","");
        }
        redisService.increaseCount(ip);

        ChatResponse analyze = analyzeApiService.analyzeWithSummary(request.getText());

        if (member != null) {
            System.out.println("username = 진짜" + member.getUsername());
            System.out.println("member = 진짜" + member);
        } else {
            System.out.println("비회원 사용자 요청입니다.");
        }

        String shareUuid = analyzeApiService.SaveAnalyzeResult(
                ip,
                analyze.getCleanText(),
                analyze,
                member,
                request.getFriend_name());

        return new ChatResponse(
                analyze.getScore(),
                analyze.getRecommendation(),
                analyze.isSuccess(),
                analyze.getMessage(),
                analyze.getSummary(),
                analyze.getCleanText(),
                shareUuid
        );
    }

    @GetMapping("/result/{uuid}")
    public ResponseEntity<ResultResponse> getResultByUuid(@PathVariable String uuid){
        AnalyzeApi result = analyzeApiService.findByUuid(uuid);
        return ResponseEntity.ok(new ResultResponse(result));
    }

}
