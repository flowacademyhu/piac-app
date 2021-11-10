package org.flowacademy.hu.market.app.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import net.bytebuddy.utility.RandomString;

import org.flowacademy.hu.market.app.entities.Admin;
import org.flowacademy.hu.market.app.exceptions.NoSuchAdminException;
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

    public String createToken(JwtRequestModel request) throws Exception {
        if (userDetailsService.findAllAdmins().size() == 0 ){
            Admin superAdmin = new Admin();
            superAdmin.setEmail(request.getEmailAddress());
            userDetailsService.saveAdmin(superAdmin);
        }
        Admin admin = userDetailsService.findAdmin(request.getEmailAddress());
        if (admin == null && userDetailsService.findAllAdmins().size() > 0 ) {
          throw new NoSuchAdminException();
      }
          try {
              var auth = authenticationManager.authenticate(
                      new UsernamePasswordAuthenticationToken(request.getEmailAddress(),
                              request.getPassword()));
              final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmailAddress());

              final String generatedString = RandomString.make(15);
              emailSendingService.sendmail(request.getEmailAddress(), generatedString);
              SecurityContextHolder.getContext().setAuthentication(auth);
              Admin result = userDetailsService.findAdmin(userDetails.getUsername());
              result.setGeneratedString(generatedString);
              userDetailsService.saveAdmin(result);
              return "Your code has been sent to your email: " + request.getEmailAddress();
          } catch (DisabledException | BadCredentialsException e) {
              e.printStackTrace();
              return "Failed in catch";
          }
       }

    public String getJwtToken(String token) throws WrongPasswordException {
        Admin admin = userDetailsService.getAdminByToken(token);
        try{
            if (!admin.getGeneratedString().equals(token)) {
                throw new WrongPasswordException();
            }
            admin.setGeneratedString(null);
            userDetailsService.saveAdmin(admin);
        }catch ( WrongPasswordException | NullPointerException e){
            throw new WrongPasswordException();
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(admin.getEmail());
        return tokenManager.generateJwtToken(userDetails);
    }
}

