package org.flowacademy.hu.market.app.model;

import java.io.Serializable;

public class JwtRequestModel implements Serializable {

    private static final long serialVersionUID = 2636936156391265891L;
    private String emailAddress;
    private final String password = "password";

    public JwtRequestModel() {
    }

    public JwtRequestModel(String username) {
        super();
        this.emailAddress = username;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String username) {
        this.emailAddress = username;
    }

    public String getPassword() {
        return password;
    }
}