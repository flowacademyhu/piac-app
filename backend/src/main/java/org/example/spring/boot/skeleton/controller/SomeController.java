package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.model.Test;
import org.example.spring.boot.skeleton.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api")
public class SomeController {

    @Autowired
    private TestRepository testRepository;


    @PostMapping("/test")
    public Test test(@RequestBody Test test) {
        return test;
    }

    @GetMapping("/all")
    public List<Object> getAll() {
        var someList = new ArrayList<>();
        return someList;
    }

    @GetMapping("/insert")
    public void insert() {
        var test = new Test();
        test.setId(1L);
    }

}
