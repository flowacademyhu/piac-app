package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/admin")
@AllArgsConstructor
public class AdminController {

    private final MarketService marketService;

    @PostMapping
    public ResponseEntity<MarketDTO> addMarket(@RequestBody MarketDTO marketDTO){
        return ResponseEntity.ok(marketService.addMarket(marketDTO));
    }



}
