package org.flowacademy.hu.market.app.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import net.bytebuddy.utility.RandomString;

import org.flowacademy.hu.market.app.entities.Admin;
import org.flowacademy.hu.market.app.exceptions.EmailSendingFailException;
import org.flowacademy.hu.market.app.exceptions.NoSuchAdminException;
import org.flowacademy.hu.market.app.exceptions.WrongPasswordException;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtUserDetailsService;
import org.flowacademy.hu.market.app.jwtandsecurity.TokenManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class AuthenticationService {

    @Autowired
    private EmailSendingService emailSendingService;
    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    private TokenManager tokenManager;

    public String createToken(String email) throws NoSuchAdminException, EmailSendingFailException {
        createSuperAdminIfNeeded(email);

        try {
            final String generatedString = generateToken();
            saveTokenForAdmin(email, generatedString);
            emailSendingService.sendMail(email, generatedString);
            return "Your code has been sent to your email: " + email;
        } catch (DisabledException | BadCredentialsException | UsernameNotFoundException e) {
            throw new NoSuchAdminException();
        }
    }

    public String getJwtToken(String token) throws WrongPasswordException {
        Admin admin = userDetailsService.getAdminByToken(token);
        if (admin == null) {
            throw new WrongPasswordException();
        }
        admin.setGeneratedString(null);
        userDetailsService.saveAdmin(admin);
        final UserDetails userDetails = userDetailsService.loadUserByUsername(admin.getEmail());
        return tokenManager.generateJwtToken(userDetails);
    }

    private void createSuperAdminIfNeeded(String email) {
        if (userDetailsService.findAllAdmins().size() == 0) {
            Admin superAdmin = new Admin();
            superAdmin.setEmail(email);
            userDetailsService.saveAdmin(superAdmin);
        }
    }

    private void saveTokenForAdmin(String email, String token) throws NoSuchAdminException {
        Admin result = userDetailsService.findAdmin(email);
        result.setGeneratedString(token);
        userDetailsService.saveAdmin(result);
    }

    private String generateToken() {
        return RandomString.make(15);
    }
}
