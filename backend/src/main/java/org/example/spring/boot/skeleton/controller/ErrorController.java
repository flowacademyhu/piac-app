package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.model.ErrorModel;
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
        return Map.of("Szia, van egy kis gond : ", new ErrorModel("Sajnos nem találom a keresett piacot, kérlek, adj meg új paramétereket...",
                "Tekintsd meg a teljes litát, hátha hamarabb megtalálod, amit keresel.. :)"));
    }

    @ExceptionHandler({EmptyResultDataAccessException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, ErrorModel> handleEmptyResult(){
        return Map.of("Szia, van egy kis gond :", new ErrorModel("A megjejlölt piac nem törölhető, mert találom, kérlek adj meg másik azonosítót...",
                "Tekintsd meg a teljes litát, hátha hamarabb megtalálod, amit keresel.. :)"));
    }


}
