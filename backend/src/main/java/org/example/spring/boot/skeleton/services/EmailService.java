package org.example.spring.boot.skeleton.services;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.Properties;

import com.sendgrid.*;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class EmailService {

    @Value(value = "${email.password}")
    private String emailPassword;

    @Value(value = "${email.address}")
    public String emailAddress;

    public void sendmail(String email) throws Exception {
//        Email from = new Email(emailAddress);
//        String subject = "Sending with SendGrid is Fun";
//        Email to = new Email(emailAddress);
//        Content content = new Content("text/plain", email);
//        Mail mail = new Mail(from, subject, to, content);
//
//        SendGrid sg = new SendGrid(System.getenv(email));
//        Request request = new Request();
//        try {
//            request.setMethod(Method.POST);
//            request.setEndpoint("/login");
//            request.setBody(mail.build());
//            Response response = sg.api(request);
//            System.out.println(response.getStatusCode());
//            System.out.println(response.getBody());
//            System.out.println(response.getHeaders());
//        } catch (IOException ex) {
//            throw ex;
//        }
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Base64.Decoder decoder = Base64.getDecoder();
        byte[] decodedBytes = decoder.decode(emailPassword);
        String decodedStr = new String(decodedBytes);
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailAddress,  decodedStr);
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
