package org.flowacademy.hu.market.app.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.flowacademy.hu.market.app.entities.Admin;
import org.flowacademy.hu.market.app.exceptions.EmailSendingFailException;
import org.flowacademy.hu.market.app.exceptions.NoSuchAdminException;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtUserDetailsService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class AuthenticationServiceTest {

    @MockBean
    JwtUserDetailsService userDetailsService;

    @MockBean
    EmailSendingService emailSendingService;

    @Autowired
    AuthenticationService authenticationService;

    @Captor
    ArgumentCaptor<String> tokenCaptor;

    @Captor
    ArgumentCaptor<Admin> adminCaptor;

    @Test
    public void shouldSaveTokenAndSendMail() throws EmailSendingFailException, NoSuchAdminException {
        List<Admin> admins = new ArrayList<>();
        admins.add(new Admin().setEmail("admin@example.com"));
        when(userDetailsService.findAllAdmins()).thenReturn(admins);
        UserDetails userDetails = User.builder()
                .username("admin@example.com")
                .password("password")
                .authorities(Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN")))
                .build();
        when(userDetailsService.loadUserByUsername("admin@example.com")).thenReturn(userDetails);
        when(userDetailsService.findAdmin("admin@example.com")).thenReturn(new Admin().setEmail("admin@example.com"));

        String result = authenticationService.createToken("admin@example.com");

        assertEquals("Your code has been sent to your email: admin@example.com", result);

        verify(userDetailsService).saveAdmin(adminCaptor.capture());
        assertEquals(adminCaptor.getValue().getEmail(), "admin@example.com");
        String savedToken = adminCaptor.getValue().getGeneratedString();
        assertTrue(savedToken.matches("[a-zA-Z0-9]{15}"),
                savedToken + " does not match regex " + "[a-zA-Z0-9]{15}");

        verify(emailSendingService).sendMail(eq("admin@example.com"), tokenCaptor.capture());
        String sentToken = tokenCaptor.getValue();
        assertTrue(sentToken.matches("[a-zA-Z0-9]{15}"),
                sentToken + " does not match regex " + "[a-zA-Z0-9]{15}");

        assertTrue(savedToken.equals(sentToken), "Saved and sent token does not equal");
    }

    @Test
    public void shouldThrowMailFailureException() throws EmailSendingFailException, NoSuchAdminException {
        List<Admin> admins = new ArrayList<>();
        admins.add(new Admin().setEmail("admin@example.com"));
        when(userDetailsService.findAllAdmins()).thenReturn(admins);
        UserDetails userDetails = User.builder()
                .username("admin@example.com")
                .password("password")
                .authorities(Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN")))
                .build();
        when(userDetailsService.loadUserByUsername("admin@example.com")).thenReturn(userDetails);
        when(userDetailsService.findAdmin("admin@example.com")).thenReturn(new Admin().setEmail("admin@example.com"));
        doThrow(new EmailSendingFailException()).when(emailSendingService).sendMail(any(), any());

        assertThrows(EmailSendingFailException.class, () -> {
            authenticationService.createToken("admin@example.com");
        });
    }

    @Test
    public void shouldThrowNoSuchAdminException()
            throws EmailSendingFailException, NoSuchAdminException {
        List<Admin> admins = new ArrayList<>();
        admins.add(new Admin().setEmail("admin@example.com"));
        when(userDetailsService.findAllAdmins()).thenReturn(admins);

        doThrow(new NoSuchAdminException()).when(userDetailsService).findAdmin(
                "non-existing-admin@example.com");

        assertThrows(NoSuchAdminException.class, () -> {
            authenticationService.createToken("non-existing-admin@example.com");
        });
    }
}