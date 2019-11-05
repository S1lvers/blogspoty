package com.blogfusion.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Service
public class EmailService {

    @Value("${spring.mail.username}")
    private String from;

    @Value("${app.domain}")
    private String appDomain;

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail() {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(from);
        msg.setTo("tosha993@mail.ru");
        msg.setSubject("Testing from Spring Boot");
        msg.setText("Hello World, Spring Boot Email");
        javaMailSender.send(msg);
    }

    //todo пробегать по массиву байт, заменять там последовательности, вместо стринги
    public void sendConfirmationEmail(String to, String confirmationHash) throws MessagingException, IOException {
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("./templates/email/confirmation.html");
        String fileString = new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);
        String confirmationUrl = appDomain + "/confirmation/" + confirmationHash;
        fileString = fileString.replaceAll("confirmation_link_replace", confirmationUrl);

        MimeMessage msg = javaMailSender.createMimeMessage();

        // true = multipart message
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);

        helper.setFrom(from);
        helper.setTo(to);

        helper.setSubject("Testing from Spring Boot");

        // default = text/plain
        //helper.setText("Check attachment for image!");

        // true = text/html
        helper.setText(fileString, true);

        javaMailSender.send(msg);

    }

}
