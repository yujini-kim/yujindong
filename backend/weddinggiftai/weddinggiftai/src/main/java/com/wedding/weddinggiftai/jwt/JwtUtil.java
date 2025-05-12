package com.wedding.weddinggiftai.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class JwtUtil {

    private final long expiration = 3600000; // 1시간
    private final Key key;

    public JwtUtil(@Value("${jwt.JWT_SECRET_KEY}") String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    // ✅ 토큰 생성
    public String createToken(String userId) {
        List<String> roles = new ArrayList<>();
        if (userId.equals("sdh1001")) {
            roles.add("ROLE_ADMIN");
            roles.add("ROLE_USER");
        } else {
            roles.add("ROLE_USER");
        }

        return Jwts.builder()
                .setSubject(userId)
                .claim("roles", roles)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // ✅ 토큰에서 사용자 ID 추출
    public String getUserIdFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // ✅ 토큰 유효성 검증
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public List<String> getRolesFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        return (List<String>) claims.get("roles");
    }
}