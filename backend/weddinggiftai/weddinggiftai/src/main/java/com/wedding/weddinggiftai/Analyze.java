package com.wedding.weddinggiftai;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Analyze {
    @GetMapping("/analyze")
    public String analyze(){
        return "analyze";
    }
}
