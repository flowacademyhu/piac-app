package org.flowacademy.hu.market.app.services;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import lombok.AllArgsConstructor;

import org.flowacademy.hu.market.app.exceptions.EmailSendingFailException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@AllArgsConstructor
@Service
public class EmailSendingService {

    @Value("${my.sendgrid.apikey}")
    private  String sendGridApiKey;
    @Value("${site.url}")
    private String siteUrl;
    @Value("${sendgrid.from-email}")
    private String fromEmail;

    private static Email from;
    private static final String SUBJECT = "Sending with SendGrid is Fun";
    private static SendGrid sg;

    public EmailSendingService() {
        from = new Email(fromEmail);
        sg = new SendGrid(sendGridApiKey);
    }

    public void sendMail(String emailAddress, String generatedString) throws EmailSendingFailException {
        Email to = new Email(emailAddress);
        Content content = new Content("text/plain", siteUrl + "/token/" + generatedString);
        Mail mail = new Mail(from, SUBJECT, to, content);
        try {
            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            if (response.getStatusCode() != 200) {
                throw new EmailSendingFailException();
            }
        } catch (IOException ex) {
            ex.printStackTrace();
            throw new EmailSendingFailException();
        }
    }
}
