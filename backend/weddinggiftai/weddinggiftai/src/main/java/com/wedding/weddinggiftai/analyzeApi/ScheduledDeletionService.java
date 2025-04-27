package com.wedding.weddinggiftai.analyzeApi;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ScheduledDeletionService {
    private final AnalyzeApiRepository analyzeApiRepository;

    @Scheduled(cron = "0 0 3 * * *")
    public void deleteOldAnonymousData(){
        analyzeApiRepository.deleteOldAnonymousData();
    }
}
