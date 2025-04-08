package com.wedding.weddinggiftai.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequiredArgsConstructor
@Controller
public class MemberController {
    private final MemberRepository memberRepository;

    @GetMapping("/")
    @ResponseBody
    public String home() {
        return "홈 페이지입니다!";
    }

    @GetMapping("/add-member")
    public String member(){
        Member member = new Member();
        member.setPassword("ehdgnl101)");
        member.setUsername("sdh1001");
        member.setDisplayName("동휘");
        memberRepository.save(member);

        return "redirect:/";
    }
}
