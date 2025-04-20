package com.wedding.weddinggiftai.mypage;

import com.wedding.weddinggiftai.analyzeApi.AnalyzeApi;
import com.wedding.weddinggiftai.analyzeApi.AnalyzeApiRepository;
import com.wedding.weddinggiftai.member.Member;
import com.wedding.weddinggiftai.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MypageController {

    private final AnalyzeApiRepository analyzeApiRepository;
    private final MemberRepository memberRepository;

    @GetMapping("/mypage")
    public ResponseEntity<MypageResponse> getMypage(
            @AuthenticationPrincipal String username,
            @RequestParam(defaultValue = "0") int page,//몇 번째 페이지인지
            @RequestParam(defaultValue = "5") int size//한페이지에 몇개씩 보여줄지
    ) {
        // 사용자 확인
        Member member = memberRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));

        // 페이징 설정 (최신순 정렬)
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());

        // 해당 사용자 분석 결과 조회
        Page<AnalyzeApi> analyzePage = analyzeApiRepository.findByMember(member, pageable);

        // 각 결과를 DTO로 변환
        List<AnalyzeItemResponse> items = analyzePage.getContent().stream()
                .map(a -> new AnalyzeItemResponse(
                        a.getText(),
                        a.getScore(),
                        a.getRecommendation(),
                        a.getSummary(),
                        a.getCreatedAt(),
                        a.getFriend_name()
                )).toList();

        // 최종 응답 객체 생성
        MypageResponse response = new MypageResponse(
                items,
                analyzePage.getTotalPages(),
                size,
                page
        );

        return ResponseEntity.ok(response);
    }
}