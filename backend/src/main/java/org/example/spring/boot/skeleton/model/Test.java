package org.example.spring.boot.skeleton.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class Test {

    private String name;
    private Long id;

    public Test() {
    }


    @javax.persistence.Id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
