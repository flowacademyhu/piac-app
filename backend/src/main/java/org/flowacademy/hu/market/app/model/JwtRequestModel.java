package org.flowacademy.hu.market.app.model;

import java.io.Serializable;

public class JwtRequestModel implements Serializable {

    private static final long serialVersionUID = 2636936156391265891L;
    private String username;
    private final String password = "password";

    public JwtRequestModel() {
    }

    public JwtRequestModel(String username) {
        super();
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
}