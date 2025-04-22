package com.wedding.weddinggiftai.analyzeApi;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
public class ChatResponse {
    private int score;
    private String recommendation;
    private boolean success;
    private String message;
    private String summary;
    private String cleanText;
    private String shareUuid;

}