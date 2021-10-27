package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class EmailService {

    @Value(value = "${email.password}")
    private String emailPassword;

    @Value(value = "${email.address}")
    public String emailAddress;

    public void sendmail(String email) throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailAddress, emailPassword );
            }
        });
        Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(emailAddress, false));

            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailAddress));
            msg.setSubject("Authentication Token");
            msg.setContent("Your Token: " + email, "text/html");
            msg.setSentDate(new Date());

        Transport.send(msg);
    }
}
