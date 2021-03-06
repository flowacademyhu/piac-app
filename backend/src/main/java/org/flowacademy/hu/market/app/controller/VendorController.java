package org.flowacademy.hu.market.app.controller;

import lombok.AllArgsConstructor;
import org.flowacademy.hu.market.app.exceptions.NoSuchVendorException;
import org.flowacademy.hu.market.app.model.DetailVendorDTO;
import org.flowacademy.hu.market.app.model.SimpleMarketDTO;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.services.MarketService;
import org.flowacademy.hu.market.app.services.VendorService;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/vendor")
@AllArgsConstructor
@CrossOrigin
public class VendorController {

    private final VendorService vendorService;
    private final MarketService marketService;

    @GetMapping
    public ResponseEntity<List<DetailVendorDTO>> allVendors() {
        return ResponseEntity.ok(vendorService.allVendors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> findVendorById(@PathVariable @RequestBody Long id)
            throws NoSuchVendorException {
        return ResponseEntity.ok(vendorService.findVendorById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> updateVendor(@PathVariable @RequestBody Long id,
            @Validated @RequestBody VendorDTO vendorDTO) throws Exception {
        return ResponseEntity.ok(vendorService.updateVendor(id, vendorDTO));
    }

    @GetMapping("/{id}/markets")
    public ResponseEntity<List<SimpleMarketDTO>> getAllMarketsByVendorId(@PathVariable @RequestBody Long id)
            throws NoSuchVendorException {
        return ResponseEntity.ok(marketService.findAllMarketsByVendorId(id));
    }

    @GetMapping("/{id}/upcoming")
    public ResponseEntity<List<SimpleMarketDTO>> getAllUpcomingMarketsByVendorId(@PathVariable @RequestBody Long id)
            throws NoSuchVendorException {
        return ResponseEntity.ok(marketService.findAllUpcomingMarketsByVendorId(id));
    }

}
