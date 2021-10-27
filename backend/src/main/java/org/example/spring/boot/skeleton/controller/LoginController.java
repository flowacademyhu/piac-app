package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.model.JwtRequestModel;
import org.example.spring.boot.skeleton.jwtandsecurity.JwtUserDetailsService;
import org.example.spring.boot.skeleton.jwtandsecurity.TokenManager;
import org.example.spring.boot.skeleton.services.AuthenticationService;
import org.example.spring.boot.skeleton.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {
    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public String createToken(@RequestBody JwtRequestModel request) throws Exception {
       return authenticationService.createToken(request);
    }
}