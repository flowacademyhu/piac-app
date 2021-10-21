package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.model.VendorResponse;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/vendor")
@AllArgsConstructor
public class VendorController {

    private final MarketService marketService;

    @PostMapping
    public ResponseEntity<VendorResponse> addVendorToMarket(@RequestBody VendorDTO vendorDTO){
        return ResponseEntity.ok(marketService.addVendor(vendorDTO));
    }

    @GetMapping
    public ResponseEntity<List<?>> allVendors(){
        return ResponseEntity.ok(marketService.allVendors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendor> findVendorById(@PathVariable @RequestBody Long id){
        return ResponseEntity.ok(marketService.findVendorById(id));
    }
    

}
