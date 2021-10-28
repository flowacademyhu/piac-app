package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/v1/api/admin/market")
@AllArgsConstructor
@CrossOrigin
public class AdminMarketController {

    private final MarketService marketService;

    @PostMapping
    public ResponseEntity<MarketDTO> addMarket(@RequestBody MarketDTO marketDTO) throws ParseException {
        return ResponseEntity.ok(marketService.addMarket(marketDTO));
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
    public ResponseEntity<MarketDTO> updateMarket(@PathVariable @RequestBody Long id, @RequestBody MarketDTO marketDTO) throws NoSuchMarketException {
        return ResponseEntity.ok(marketService.updateMarketById(id, marketDTO));
    }



}
