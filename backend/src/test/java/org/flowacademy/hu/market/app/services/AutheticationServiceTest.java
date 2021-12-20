package org.flowacademy.hu.market.app.services;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.flowacademy.hu.market.app.entities.Admin;
import org.flowacademy.hu.market.app.exceptions.EmailSendingFailException;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtUserDetailsService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class AuthenticationServiceTest {

    @MockBean
    JwtUserDetailsService userDetailsService;

    @MockBean
    EmailSendingService emailSendingService;

    @Autowired
    AuthenticationService authenticationService;

    @Test
    public void shouldThrowMailFailureException() throws EmailSendingFailException {
        List<Admin> admins = new ArrayList<>();
        admins.add(new Admin().setEmail("admin@example.com"));
        when(userDetailsService.findAllAdmins()).thenReturn(admins);
        doThrow(new EmailSendingFailException()).when(emailSendingService).sendMail(any(), any());

        assertThrows(EmailSendingFailException.class, () -> {
            authenticationService.createToken("admin@example.com");
        });
    }
}