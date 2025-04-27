package com.wedding.weddinggiftai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.nio.charset.StandardCharsets;

@SpringBootApplication
@EnableScheduling
public class WeddinggiftaiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeddinggiftaiApplication.class, args);
	}

}
