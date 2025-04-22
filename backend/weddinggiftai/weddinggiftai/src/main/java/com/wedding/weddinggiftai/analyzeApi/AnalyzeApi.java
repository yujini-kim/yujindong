package com.wedding.weddinggiftai.analyzeApi;

import com.wedding.weddinggiftai.member.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
public class AnalyzeApi {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ip;
    @Column(length = 2000)
    private String text;
    private Integer score;
    private String recommendation;
    private String summary;
    private LocalDateTime createdAt;
    private String friend_name;
    @Column(unique = true, updatable = false)
    private String shareUuid = UUID.randomUUID().toString();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
}
