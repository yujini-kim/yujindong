package com.wedding.weddinggiftai.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@RequiredArgsConstructor
@Controller
public class MemberController {
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    @GetMapping("/")
    @ResponseBody
    public String home() {
        return "홈 페이지입니다!";
    }



    @PostMapping("/signup")
    @ResponseBody
    public ResponseEntity<MemberResponse> signup(@RequestBody MemberRequest request){
        try{
            memberService.signup(request);
            return ResponseEntity.ok(new MemberResponse("회원가입 성공"));
        } catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(new MemberResponse(e.getMessage()));
        }

    }
}
