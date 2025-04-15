package com.wedding.weddinggiftai.member;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
    boolean existsByUserId(String userId);
    boolean existsByEmail(String email);
}
