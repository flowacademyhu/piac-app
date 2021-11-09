package org.flowacademy.hu.market.app.entities;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Email
    @NotNull
    @Column(unique = true)
    private String email;
    private String generatedString;
    private String jwtToken;


    public String getEmail() {
        return email;
    }

    public Admin setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getGeneratedString() {
        return generatedString;
    }

    public Admin setGeneratedString(String token) {
        this.generatedString = token;
        return this;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public Admin setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
        return this;
    }
}
