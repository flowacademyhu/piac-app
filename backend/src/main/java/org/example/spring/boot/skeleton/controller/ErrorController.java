package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.model.ErrorModel;
import org.example.spring.boot.skeleton.utilities.MessagesConstants;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;
import java.util.NoSuchElementException;

@RestControllerAdvice
public class ErrorController {



    @ExceptionHandler({NoSuchElementException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, ErrorModel> handleNoSuchelement(){
        return Map.of(MessagesConstants.ERROR_MESSAGE_START, new ErrorModel(MessagesConstants.NOT_FOUND_MARKET_MESSAGE,
                MessagesConstants.VIEW_WHOLE_LIST_MESSAGE));
    }

    @ExceptionHandler({EmptyResultDataAccessException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, ErrorModel> handleEmptyResult(){
        return Map.of(MessagesConstants.ERROR_MESSAGE_START, new ErrorModel(MessagesConstants.NOT_ABLE_TO_DELETE_MESSAGE,
                MessagesConstants.VIEW_WHOLE_LIST_MESSAGE));
    }


}
