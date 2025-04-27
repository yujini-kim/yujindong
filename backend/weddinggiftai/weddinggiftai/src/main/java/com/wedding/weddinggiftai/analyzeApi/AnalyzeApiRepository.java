package com.wedding.weddinggiftai.analyzeApi;

import com.wedding.weddinggiftai.member.Member;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AnalyzeApiRepository extends JpaRepository<AnalyzeApi, Long> {
    Page<AnalyzeApi> findByMember(Member member, Pageable pageable);
    Optional<AnalyzeApi> findByShareUuid(String shareUuid);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM analyze_api WHERE member_id IS NULL AND created_at < NOW() - INTERVAL '7 days'", nativeQuery = true)
    void deleteOldAnonymousData();
}