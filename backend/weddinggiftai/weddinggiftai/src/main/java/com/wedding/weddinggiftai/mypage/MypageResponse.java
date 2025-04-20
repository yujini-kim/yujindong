package com.wedding.weddinggiftai.mypage;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class MypageResponse {
    private List<AnalyzeItemResponse> items;
    private int totalPages;
    private int pageSize;
    private int currentPage;

}
