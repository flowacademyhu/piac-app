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

@RestControllerAdvice
public class ErrorController {

    @ExceptionHandler({NoSuchMarketException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public  ErrorModel handleNoSuchMarket(){
        return  new ErrorModel(MessagesConstants.NOT_FOUND_MARKET_MESSAGE);
    }

    @ExceptionHandler({NoSuchVendorException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorModel handleNoSuchVendor(){
        return new ErrorModel(MessagesConstants.NOT_FOUND_VENDOR_MESSAGE);
    }

    @ExceptionHandler({EmptyResultDataAccessException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorModel handleEmptyResult(){
        return new ErrorModel(MessagesConstants.NOT_ABLE_TO_DELETE_MESSAGE);
    }

    @ExceptionHandler({SQLIntegrityConstraintViolationException.class})
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorModel handleIntegrityConstraint(){
        return  new ErrorModel(MessagesConstants.VENDOR_NAME_EXISTS_MESSAGE);
    }
}
