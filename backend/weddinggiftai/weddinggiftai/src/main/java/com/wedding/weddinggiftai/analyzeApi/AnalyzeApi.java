package com.wedding.weddinggiftai.analyzeApi;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String text;
    private Integer score;
    private String recommendation;
    private String summary;
    private LocalDateTime createdAt;
}
