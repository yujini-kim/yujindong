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

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = new DefaultOAuth2UserService().loadUser(userRequest);
        String email = oAuth2User.getAttribute("email");
        String password = UUID.randomUUID().toString();
        String displayName = oAuth2User.getAttribute("name");


        Member member = memberRepository.findByEmail(email)
                .orElseGet(() ->{
                    Member m = new Member();
                    m.setUsername(email);
                    m.setPassword(password);
                    m.setDisplayName(displayName);
                    m.setEmail(email);

                    return memberRepository.save(m);
                });

        return new CustomOAuth2User(member, oAuth2User.getAttributes());
    }
}