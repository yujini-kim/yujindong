package com.wedding.weddinggiftai.admin;

import com.wedding.weddinggiftai.analyzeApi.AnalyzeApiRepository;
import com.wedding.weddinggiftai.member.Member;
import com.wedding.weddinggiftai.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminController {
    private final MemberRepository memberRepository;
    private final AnalyzeApiRepository analyzeApiRepository;
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/members")
    public ResponseEntity<List<AdminMemberResponse>> getAllMember(){

        List<Member> members = memberRepository.findAll();
        List<AdminMemberResponse> all_member=members.stream().map(member -> {
            int analyzeCount = analyzeApiRepository.countByMember(member);
            return new AdminMemberResponse(
                    member.getId(),
                    member.getDisplayName(),
                    member.getUsername(),
                    member.getEmail(),
                    analyzeCount
            );
        }).collect(Collectors.toList());
        return ResponseEntity.ok(all_member);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/admin/members/delete-member/{username}")
    public ResponseEntity<Void> deleteMember(@PathVariable String username){
        Member member = memberRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("해당 사용자를 찾을 수 없습니다."));

        memberRepository.delete(member);
        return ResponseEntity.noContent().build();
    }
}
