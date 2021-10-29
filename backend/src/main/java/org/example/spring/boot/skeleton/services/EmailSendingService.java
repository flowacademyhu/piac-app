package org.example.spring.boot.skeleton.services;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import org.example.spring.boot.skeleton.model.JwtRequestModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.Properties;
import java.util.Scanner;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class EmailSendingService {

    @Value(value = "${email.password}")
    public String emailPassword;

    @Value(value = "${email.address}")
    public String emailAddress;

//    public String getAPIKey() {
//
//        try {
//            File myObj = new File("/home/kovarik/Lambda_project/apikey.txt");
//            Scanner myReader = new Scanner(myObj);
//            while (myReader.hasNextLine()) {
//                String data = myReader.nextLine();
//                System.out.println(data);
//                return data;
//            }
//        } catch (
//                FileNotFoundException e) {
//            System.out.println("An error occurred.");
//            e.printStackTrace();
//        }
//        return null;
//    }

    public void sendmail( String token) throws Exception {
//        Email from = new Email(emailAddress);
//        String subject = "Sending with SendGrid is Fun";
//        Email to = new Email(emailAddress);
//        Content content = new Content("text/plain", token);
//        Mail mail = new Mail(from, subject, to, content);
//        SendGrid sg = new SendGrid(getAPIKey());
//        Request request = new Request();
//        try {
//            request.setMethod(Method.POST);
//            request.setEndpoint("mail/send");
//            request.setBody(mail.build());
//            Response response = sg.api(request);
//            return "done";
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
            msg.setContent("Your Token: " + token, "text/html");
            msg.setSentDate(new Date());

        Transport.send(msg);

    }


}
