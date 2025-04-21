package com.wedding.weddinggiftai.member;

import com.wedding.weddinggiftai.analyzeApi.AnalyzeApi;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Entity
public class Member {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;
    private String displayName;
    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AnalyzeApi> analyzeApis = new ArrayList<>();


}
