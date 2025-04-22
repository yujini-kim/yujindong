package com.wedding.weddinggiftai.analyzeApi;

import com.wedding.weddinggiftai.member.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnalyzeApiRepository extends JpaRepository<AnalyzeApi,Long> {
    Page<AnalyzeApi> findByMember(Member member, Pageable pageable);
    Optional<AnalyzeApi> findByShareUuid(String shareUuid);
}
