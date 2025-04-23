package com.wedding.weddinggiftai.member;

import com.wedding.weddinggiftai.analyzeApi.AnalyzeApi;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


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

    public Member(String email,String displayName){
        this.username = "google_" + email;
        this.password = UUID.randomUUID().toString();
        this.displayName = displayName;
        this.email = email;
    }

    public Member(){

    }



}
