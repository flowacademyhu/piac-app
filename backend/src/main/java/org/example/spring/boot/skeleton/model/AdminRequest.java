package org.example.spring.boot.skeleton.model;


import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class AdminRequest implements Serializable {

    private static final long serialVersionUID = 2636936156391265891L;
    @NotNull
    private String password;

    public AdminRequest() {
    }

    public AdminRequest(String password) {
        super();
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}