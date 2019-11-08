package com.blogfusion;

import com.blogfusion.services.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.mail.MessagingException;
import java.io.IOException;

@Slf4j
@SpringBootApplication(scanBasePackages = {"com.blogfusion"})
public class Application implements CommandLineRunner {

    @Autowired
    private EmailService emailService;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {
        this.onStartup();
    }

    void onStartup() {
        System.out.println("\n\n\t+=====================================+");
        System.out.println("\t|  STARTING BLOGFUSION WEB APPLICATION|");
        System.out.println("\t+=====================================+\n\n");
    }
}