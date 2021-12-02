package org.flowacademy.hu.market.app.services;


import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class EmailSendingService {

    @Value("${my.sendgrid.apikey}")
    private  String sendGridApiKey;
    @Value("${site.url}")
    private String siteUrl;
    @Value("${sendgrid.from-email}")
    private String fromEmail;

    public void sendmail( String emailAddress, String generatedString) throws Exception {
        Email from = new Email(fromEmail);
        String subject = "Sending with SendGrid is Fun";
        Email to = new Email(emailAddress);
        Content content = new Content("text/plain", siteUrl + "/token/" + generatedString);
        Mail mail = new Mail(from, subject, to, content);
        SendGrid sg = new SendGrid(sendGridApiKey);
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
