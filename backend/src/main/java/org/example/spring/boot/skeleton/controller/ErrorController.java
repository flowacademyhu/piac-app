package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.exceptions.NoSuchVendorException;
import org.example.spring.boot.skeleton.model.ErrorModel;
import org.example.spring.boot.skeleton.utilities.MessagesConstants;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Map;


@RestControllerAdvice
public class ErrorController {

    @ExceptionHandler({NoSuchMarketException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, ErrorModel> handleNoSuchMarket(){
        return Map.of(MessagesConstants.ERROR_MESSAGE_START, new ErrorModel(MessagesConstants.NOT_FOUND_MARKET_MESSAGE,
                MessagesConstants.VIEW_WHOLE_LIST_MESSAGE));
    }

    @ExceptionHandler({NoSuchVendorException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, ErrorModel> handleNoSuchVendor(){
        return Map.of(MessagesConstants.ERROR_MESSAGE_START, new ErrorModel(MessagesConstants.NOT_FOUND_VENDOR_MESSAGE,
                MessagesConstants.VIEW_WHOLE_LIST_MESSAGE));
    }

    @ExceptionHandler({EmptyResultDataAccessException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, ErrorModel> handleEmptyResult(){
        return Map.of(MessagesConstants.ERROR_MESSAGE_START, new ErrorModel(MessagesConstants.NOT_ABLE_TO_DELETE_MESSAGE,
                MessagesConstants.VIEW_WHOLE_LIST_MESSAGE));
    }

    @ExceptionHandler({SQLIntegrityConstraintViolationException.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public Map<String, ErrorModel> handleIntegrityConstraint(){
        return Map.of(MessagesConstants.ERROR_MESSAGE_START, new ErrorModel(MessagesConstants.VENDOR_NAME_EXISTS_MESSAGE,
                MessagesConstants.CONTACT_ADMIN_MESSAGE));
    }
}
