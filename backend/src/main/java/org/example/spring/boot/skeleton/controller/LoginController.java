package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.exceptions.WrongPasswordException;
import org.example.spring.boot.skeleton.model.AdminRequest;
import org.example.spring.boot.skeleton.model.JwtRequestModel;
import org.example.spring.boot.skeleton.services.AuthenticationService;
import org.example.spring.boot.skeleton.services.EmailSendingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    AuthenticationService authenticationService;
    @Autowired
    EmailSendingService emailSendingService;

    @PostMapping("/login")
    public String createToken(@RequestBody JwtRequestModel request) throws Exception {
       return authenticationService.createToken(request);
    }

    @PostMapping("/token")
    public String getToken (@RequestBody @Valid AdminRequest adminRequest) throws WrongPasswordException {
        return authenticationService.getToken(adminRequest.getPassword());
    }
}