package org.flowacademy.hu.market.app.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.flowacademy.hu.market.app.model.JwtRequestModel;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtUserDetailsService;
import org.flowacademy.hu.market.app.jwtandsecurity.TokenManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@NoArgsConstructor
@Service
public class AuthenticationService {


    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenManager tokenManager;

    public String createToken(JwtRequestModel request) throws Exception {
        try {
            var auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(),
                            request.getPassword()));

            if (auth.isAuthenticated()) {
                final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
                final String jwtToken = tokenManager.generateJwtToken(userDetails);

                return jwtToken;
            }

        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
        return null;
    }
}
