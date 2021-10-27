package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;

import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/vendor")
@AllArgsConstructor
@CrossOrigin
public class VendorController {

    private final MarketService marketService;

    @PostMapping
    public ResponseEntity<DetailVendorDTO> addVendorToMarket(@RequestBody VendorDTO vendorDTO){
        return ResponseEntity.ok(marketService.addVendor(vendorDTO));
    }

    @GetMapping
    public ResponseEntity<List<DetailVendorDTO>> allVendors(){
        return ResponseEntity.ok(marketService.allVendors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> findVendorById(@PathVariable @RequestBody Long id){
        return ResponseEntity.ok(marketService.findVendorById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> updateVendor(@PathVariable @RequestBody Long id, @RequestBody VendorDTO vendorDTO){
        return ResponseEntity.ok(marketService.updateVendor(id, vendorDTO));
    }

}
