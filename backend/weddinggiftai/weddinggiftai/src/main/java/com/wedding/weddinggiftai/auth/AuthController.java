package com.wedding.weddinggiftai.auth;

import com.wedding.weddinggiftai.jwt.JwtUtil;
import com.wedding.weddinggiftai.member.Member;
import com.wedding.weddinggiftai.member.MemberRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class AuthController {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request, HttpServletResponse response){

        Optional<Member> member = memberRepository.findByUsername(request.getUsername());

        if(member.isEmpty()){
            return ResponseEntity
                    .status(404)
                    .body(new LoginResponse(false,"존재하지 않는 아이디입니다."));
        }
        String encodedPassword=member.get().getPassword();
        if(!passwordEncoder.matches(request.getPassword(),encodedPassword)){
            return ResponseEntity
                    .status(401)
                    .body(new LoginResponse(false,"비밀번호가 일치하지 않습니다."));
        }

        String token = jwtUtil.createToken(member.get().getUsername());

        Cookie cookie = new Cookie("access_token",token);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(60*60);
        response.addCookie(cookie);

        return ResponseEntity.ok(new LoginResponse(true,"로그인 성공"));


    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {

        request.getSession().invalidate();

        Cookie cookie = new Cookie("access_token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // 개발 중
        cookie.setPath("/");
        cookie.setMaxAge(0); // 즉시 만료
        response.addCookie(cookie);

        Cookie jsessionCookie = new Cookie("JSESSIONID", null);
        jsessionCookie.setPath("/");
        jsessionCookie.setMaxAge(0);
        response.addCookie(jsessionCookie);

        return ResponseEntity.ok().body("로그아웃 성공");
    }

    @GetMapping("/verify")
    public ResponseEntity<VerifyResponse> verify(@AuthenticationPrincipal Member member,@CookieValue("access_token") String token){
        List<String> roles = jwtUtil.getRolesFromToken(token);
        boolean isAdmin = roles.contains("ROLE_ADMIN");
        return ResponseEntity.ok(new VerifyResponse(member.getUsername(),"OK",isAdmin));
    }
}
