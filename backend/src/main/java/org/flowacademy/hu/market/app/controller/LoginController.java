package org.flowacademy.hu.market.app.controller;

import org.flowacademy.hu.market.app.model.JwtRequestModel;
import org.flowacademy.hu.market.app.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/api")
@CrossOrigin
public class LoginController {

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public String createToken(@RequestBody JwtRequestModel request) throws Exception {
       return authenticationService.createToken(request);
    }

    @GetMapping("/token/{token}")
    public String getToken (@PathVariable @RequestBody @Valid String token) throws Exception {
        return authenticationService.getJwtToken(token);
    }
}