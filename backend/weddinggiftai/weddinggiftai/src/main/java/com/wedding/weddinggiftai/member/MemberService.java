package com.wedding.weddinggiftai.member;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public void signup(MemberRequest request){
        if (memberRepository.existsByUsername(request.getUsername())){
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");

        }
        if(memberRepository.existsByEmail(request.getEmail())){
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");

        }
        Member member = new Member();
        member.setUsername(request.getUsername());
        member.setPassword(passwordEncoder.encode(request.getPassword()));
        member.setDisplayName(request.getDisplayName());
        member.setEmail(request.getEmail());
        memberRepository.save(member);

    }
}
