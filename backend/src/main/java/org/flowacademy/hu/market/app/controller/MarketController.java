package org.flowacademy.hu.market.app.controller;

import lombok.AllArgsConstructor;

import org.flowacademy.hu.market.app.exceptions.NoSuchMarketException;
import org.flowacademy.hu.market.app.model.MarketDTO;
import org.flowacademy.hu.market.app.model.SimpleMarketDTO;
import org.flowacademy.hu.market.app.model.SimpleVendorDTO;
import org.flowacademy.hu.market.app.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/v1/api/market")
@AllArgsConstructor
@CrossOrigin
public class MarketController {

    private final MarketService marketService;

    @GetMapping
    public ResponseEntity<List<SimpleMarketDTO>> allMarkets() throws ParseException{
        return ResponseEntity.ok(marketService.allMarkets());
    }

    @GetMapping("/upcoming")
    public ResponseEntity<List<SimpleMarketDTO>> findAllUpcomingMarkets() {
        return ResponseEntity.ok(marketService.findAllUpcomingMarkets());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MarketDTO> getMarketById(@RequestBody @PathVariable Long id) throws Exception {
        return ResponseEntity.ok(marketService.getMarketById(id));
    }

    @GetMapping("/{id}/vendors")
    public ResponseEntity<List<SimpleVendorDTO>> findAllVendorsAtGivenMarket(@PathVariable @RequestBody Long id) throws NoSuchMarketException {
        return ResponseEntity.ok(marketService.findAllVendorsAtGivenMarket(id));
    }
}