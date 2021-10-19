package org.example.spring.boot.skeleton.controller;

import org.example.spring.boot.skeleton.model.Test;
import org.example.spring.boot.skeleton.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api")
public class SomeController {

    @Autowired
    private TestRepository testRepository;

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/all")
    public List<Test> getAll() {
        return testRepository.findAll();
    }

    @GetMapping("/insert")
    public void insert() {
        var test = new Test();
        test.setName(UUID.randomUUID().toString());
        testRepository.insert(test);
    }

}
