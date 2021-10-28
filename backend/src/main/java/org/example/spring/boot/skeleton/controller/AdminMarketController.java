package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.SimpleVendorDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/admin/market")
@AllArgsConstructor
@CrossOrigin
public class AdminMarketController {

    private final MarketService marketService;

    @GetMapping
    public ResponseEntity<List<MarketDTO>> allMarkets(){
        return ResponseEntity.ok(marketService.allMarkets());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MarketDTO> getMarketById(@RequestBody @PathVariable Long id) throws Exception {
        return ResponseEntity.ok(marketService.getMarketById(id));
    }

    @GetMapping("/{id}/vendors")
    public ResponseEntity<List<SimpleVendorDTO>> findAllVendorsAtGivenMarket(@PathVariable @RequestBody Long id) throws NoSuchMarketException {
        return ResponseEntity.ok(marketService.findAllVendorsAtGivenMarket(id));
    }

    @PostMapping
    public ResponseEntity<Market> addMarket(@RequestBody MarketDTO marketDTO){
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
