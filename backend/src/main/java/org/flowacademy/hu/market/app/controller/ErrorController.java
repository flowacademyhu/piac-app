package org.flowacademy.hu.market.app.controller;

import io.jsonwebtoken.ExpiredJwtException;
import org.flowacademy.hu.market.app.exceptions.NoSuchAdminException;
import org.flowacademy.hu.market.app.exceptions.NoSuchMarketException;
import org.flowacademy.hu.market.app.exceptions.NoSuchVendorException;
import org.flowacademy.hu.market.app.exceptions.WrongPasswordException;
import org.flowacademy.hu.market.app.model.ErrorModel;
import org.flowacademy.hu.market.app.utilities.MessagesConstants;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
public class ErrorController {

    @ExceptionHandler({NoSuchMarketException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorModel handleNoSuchMarket(){
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

    @ExceptionHandler({WrongPasswordException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorModel handleWrongPassword(){
        return new ErrorModel(MessagesConstants.WRONG_PASSWORD);
    }

    @ExceptionHandler({ExpiredJwtException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorModel handleExpiredJwt(){
        return new ErrorModel(MessagesConstants.JWT_EXPIRED);
    }

    @ExceptionHandler({DisabledException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorModel handleUserDisabled(){
        return new ErrorModel(MessagesConstants.USER_DISABLED);
    }

    @ExceptionHandler({BadCredentialsException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorModel handleBadCredentials(){
        return new ErrorModel(MessagesConstants.INVALID_CREDENTIALS);
    }
    @ExceptionHandler({NoSuchAdminException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorModel handleNoSuchAdmin(){
        return new ErrorModel(MessagesConstants.NO_SUCH_ADMIN);
    }
}
