package org.flowacademy.hu.market.app.entities;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
public class User {

    @Id
    @Email
    @NotNull
    @Column(unique = true)
    private String email;


    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public User(String email) {
        this.email = email;
    }
}
