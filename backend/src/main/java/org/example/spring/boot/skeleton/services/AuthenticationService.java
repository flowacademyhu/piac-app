package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.example.spring.boot.skeleton.exceptions.WrongPasswordException;
import org.example.spring.boot.skeleton.model.JwtRequestModel;
import org.example.spring.boot.skeleton.jwtandsecurity.JwtUserDetailsService;
import org.example.spring.boot.skeleton.jwtandsecurity.TokenManager;
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

    private String modifPassword;
    private String tokenForExchange;

    public String createToken(JwtRequestModel request) throws Exception {
        try {
            var auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(),
                            request.getPassword()));

            if (auth.isAuthenticated()) {
                final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
                final String jwtToken = tokenManager.generateJwtToken(userDetails);
                String generatedString = RandomString.make(15);
                tokenForExchange = jwtToken;
                emailSendingService.sendmail(generatedString);
                modifPassword = generatedString;
                SecurityContextHolder.getContext().setAuthentication(auth);
                request.setPassword(generatedString);
                return "Your code has been set to your email: " + emailSendingService.emailAddress;
            }
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
        return null;
    }

    public String getToken(String password) throws WrongPasswordException {
        if (!password.equals(modifPassword)) {
            throw new WrongPasswordException();
        }   modifPassword = null;
            return tokenForExchange;
    }
}

