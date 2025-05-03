package com.wedding.weddinggiftai.oauth;

import com.wedding.weddinggiftai.member.Member;
import com.wedding.weddinggiftai.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = new DefaultOAuth2UserService().loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId(); // google or kakao
        String email = null;
        String displayName = null;
        String password = UUID.randomUUID().toString();


        if (registrationId.equals("google")) {
            // 구글 응답 구조
            email = oAuth2User.getAttribute("email");
            displayName = oAuth2User.getAttribute("name");
        } else if (registrationId.equals("kakao")) {
            // 카카오 응답 구조
            // attributes -> kakao_account -> email, profile -> nickname
            var kakaoAccount = (Map<String, Object>) oAuth2User.getAttributes().get("kakao_account");
            var profile = (Map<String, Object>) kakaoAccount.get("profile");

            email = (String) kakaoAccount.get("email");
            displayName = (String) profile.get("nickname");
        } else {
            throw new OAuth2AuthenticationException("Unsupported provider: " + registrationId);
        }




        Member member = memberRepository.findByEmail(email).orElse(null);

        if (member == null) {
            member = new Member();
            member.setUsername(email);
            member.setPassword(password);
            member.setDisplayName(displayName);
            member.setEmail(email);
            member = memberRepository.save(member);
        };

        return new CustomOAuth2User(member, oAuth2User.getAttributes());
    }
}