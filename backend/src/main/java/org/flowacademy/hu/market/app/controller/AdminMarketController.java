package org.flowacademy.hu.market.app.controller;

import lombok.AllArgsConstructor;

import org.flowacademy.hu.market.app.exceptions.NoSuchMarketException;
import org.flowacademy.hu.market.app.model.MarketDTO;
import org.flowacademy.hu.market.app.model.MarketInputDTO;
import org.flowacademy.hu.market.app.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/v1/api/admin/market")
@AllArgsConstructor
@CrossOrigin
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class AdminMarketController {

    private final MarketService marketService;

    @PostMapping
    public ResponseEntity<MarketDTO> addMarket(@RequestBody MarketInputDTO marketDTO) throws ParseException {
        return ResponseEntity.ok(marketService.addMarket(marketDTO));
    }

    @DeleteMapping
    public void deleteAllMarkets() {
        marketService.deleteAllMarkets();
    }

    @DeleteMapping("/{id}")
    public void deleteMarketById(@PathVariable Long id) {
        marketService.deleteMarketById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MarketDTO> updateMarket(@PathVariable @RequestBody Long id,
            @RequestBody MarketInputDTO marketDTO)
            throws NoSuchMarketException, ParseException {
        return ResponseEntity.ok(marketService.updateMarketById(id, marketDTO));
    }

}
