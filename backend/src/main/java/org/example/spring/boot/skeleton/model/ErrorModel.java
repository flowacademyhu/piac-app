package org.example.spring.boot.skeleton.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorModel {

    private String message;
    private String data;


}
