package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api")
@AllArgsConstructor
public class MarketController {

    private final MarketService marketService;

    @PostMapping("/market")
    public ResponseEntity<Market> addMarket(@RequestBody MarketDTO marketDTO){
        return ResponseEntity.ok(marketService.addMarket(marketDTO));
    }
    @GetMapping("/market")
    public List<Market> allMarkets(){
        return marketService.allMarkets();
    }
}