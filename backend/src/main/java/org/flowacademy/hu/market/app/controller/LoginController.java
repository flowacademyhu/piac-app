package org.flowacademy.hu.market.app.controller;

import org.flowacademy.hu.market.app.model.JwtRequestModel;
import org.flowacademy.hu.market.app.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
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