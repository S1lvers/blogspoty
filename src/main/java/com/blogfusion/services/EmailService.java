package com.blogfusion.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailService {


    @Value("${app.mail.email}")
    private String defaultFromEmail;
    @Value("${app.mail.password}")
    private String defaultPassword;
    @Value("${app.mail.host}")
    private String defaultHost;

    @Value("${app.mail.port}")
    private String defaultPort;

    public void sendConfirmationEmail(String toEmail) {
        // Get system properties
        Properties properties = System.getProperties();
        // Setup mail server
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", defaultHost);
        properties.put("mail.smtp.user", defaultFromEmail);
        properties.put("mail.smtp.password", defaultPassword);
        properties.put("mail.smtp.port", defaultPort);
        properties.put("mail.smtp.auth", "true");

        // Get the default Session object.
        Session session = Session.getDefaultInstance(properties);

        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(defaultFromEmail));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO,
                    new InternetAddress(toEmail));

            // Set Subject: header field
            message.setSubject("Confirmation!");

            // Now set the actual message
            message.setText("This is actual message");

            // Send message
            Transport transport = session.getTransport("smtp");
            transport.connect(defaultHost, defaultFromEmail, defaultPassword);
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }
}
