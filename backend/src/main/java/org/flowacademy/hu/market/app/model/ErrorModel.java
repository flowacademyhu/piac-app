package org.flowacademy.hu.market.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.flowacademy.hu.market.app.utilities.MessagesConstants;

@Data
@AllArgsConstructor
public class ErrorModel {
    private MessagesConstants error;
}
