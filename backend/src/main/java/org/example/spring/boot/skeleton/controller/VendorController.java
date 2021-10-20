package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/vendor")
@AllArgsConstructor
public class VendorController {

    private final MarketService marketService;

    @PostMapping
    public ResponseEntity<VendorDTO> addVendorToMarket(@RequestBody VendorDTO vendorDTO){
        return ResponseEntity.ok(marketService.addVendor(vendorDTO));

    }
}
