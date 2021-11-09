package org.flowacademy.hu.market.app.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import net.bytebuddy.utility.RandomString;

import org.flowacademy.hu.market.app.exceptions.WrongPasswordException;
import org.flowacademy.hu.market.app.model.JwtRequestModel;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtUserDetailsService;
import org.flowacademy.hu.market.app.jwtandsecurity.TokenManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenManager tokenManager;

    private String generatedPassword;
    private String tokenForExchange;

    public String createToken(JwtRequestModel request) throws Exception {
        try {
            var auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmailAddress(),
                            request.getPassword()));

            if (auth.isAuthenticated()) {
                final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmailAddress());
                final String jwtToken = tokenManager.generateJwtToken(userDetails);
                String generatedString = RandomString.make(15);
                tokenForExchange = jwtToken;
                generatedPassword = generatedString;
                emailSendingService.sendmail(request.getEmailAddress(), generatedString);
                SecurityContextHolder.getContext().setAuthentication(auth);
              var result =  userDetailsService.findAdmin(userDetails.getUsername());
              result.setToken(generatedString);
                userDetailsService.saveAdmin(result);
                return "Your code has been sent to your email: " + request.getEmailAddress();
            }
        } catch (DisabledException | BadCredentialsException e) {
            e.printStackTrace();
                return "Failed in catch";
        }
        return "Failed in finally";
    }

    public String getToken(String generatedString) throws WrongPasswordException {
        if (!generatedString.equals(generatedPassword)) {
            throw new WrongPasswordException();
        }
            return tokenForExchange;
    }
}

