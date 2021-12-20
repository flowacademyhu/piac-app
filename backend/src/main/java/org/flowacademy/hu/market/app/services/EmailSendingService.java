package org.flowacademy.hu.market.app.services;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import org.flowacademy.hu.market.app.exceptions.EmailSendingFailException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class EmailSendingService {

    Logger logger = LoggerFactory.getLogger(EmailSendingService.class);

    @Value("${site.url}")
    private String siteUrl;

    private static Email from;
    private static final String SUBJECT = "Sending with SendGrid is Fun";
    private static SendGrid sg;

    public EmailSendingService(@Value("${my.sendgrid.apikey}") String sendGridApiKey,
            @Value("${sendgrid.from-email}") String fromEmail) {
        from = new Email(fromEmail);
        sg = new SendGrid(sendGridApiKey);
    }

    public void sendMail(String emailAddress, String generatedString) throws EmailSendingFailException {
        Email to = new Email(emailAddress);
        Content content = new Content("text/plain", siteUrl + "/token/" + generatedString);
        Mail mail = new Mail(from, SUBJECT, to, content);
        logger.info("Sending email to " + emailAddress);
        try {
            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            if (!isResponseSucceeded(response)) {
                logger.error("Failed to send email, received the following status code: " + response.getStatusCode());
                throw new EmailSendingFailException();
            } else {
                logger.info("Email sent successfully to " + emailAddress);
            }
        } catch (IOException ex) {
            logger.error("Failed to send email: ", ex);
            throw new EmailSendingFailException();
        }
    }

    private static boolean isResponseSucceeded(Response response) {
        int statusCode = response.getStatusCode();
        return 200 <= statusCode && statusCode < 300;
    }
}
