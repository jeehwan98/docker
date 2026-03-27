package com.example.dockerproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@SpringBootApplication
@RestController
public class DockerProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(DockerProjectApplication.class, args);
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok");
    }

    @PostMapping("/api/echo")
    public Map<String, Object> echo(@RequestBody Map<String, Object> body) {
        return Map.of("echo", body);
    }
}
