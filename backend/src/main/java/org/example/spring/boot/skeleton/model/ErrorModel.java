package org.example.spring.boot.skeleton.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.example.spring.boot.skeleton.utilities.MessagesConstants;

@Data
@AllArgsConstructor
public class ErrorModel {
    private MessagesConstants error;
}
