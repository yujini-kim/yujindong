package com.wedding.weddinggiftai.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Controller
@CrossOrigin(origins = {
        "http://localhost:3000",
        "http://54.180.242.92:3000"
})
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
