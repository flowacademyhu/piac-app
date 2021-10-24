package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/market")
@AllArgsConstructor
public class MarketController {

    private final MarketService marketService;


    @PostMapping
    public ResponseEntity<Market> addMarket(@RequestBody MarketDTO marketDTO){
        return ResponseEntity.ok(marketService.addMarket(marketDTO));
    }
    @GetMapping
    public List<MarketDTO> allMarkets(){
        return marketService.allMarkets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMarketById(@RequestBody @PathVariable Long id){
        return ResponseEntity.ok(marketService.getMarketById(id));
    }

    @DeleteMapping
    public void deleteAllMarkets(){
        marketService.deleteAllMarkets();
    }

    @DeleteMapping("/{id}")
    public void deleteMarketById(@PathVariable Long id){
        marketService.deleteMarketById(id);
    }

    @PutMapping("/{id}")
    public Market updateMarket(@PathVariable @RequestBody Long id, @RequestBody MarketDTO marketDTO){
         return marketService.updateMarketById(id, marketDTO);
    }


}