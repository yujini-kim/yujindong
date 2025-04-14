package com.wedding.weddinggiftai.analyzeApi;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

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
}
