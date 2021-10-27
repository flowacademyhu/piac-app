package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;

import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.example.spring.boot.skeleton.services.VendorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/vendor")
@AllArgsConstructor
@CrossOrigin
public class VendorController {

    private final MarketService marketService;
    private final VendorService vendorService;



    @GetMapping
    public ResponseEntity<List<DetailVendorDTO>> allVendors(){
        return ResponseEntity.ok(vendorService.allVendors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> findVendorById(@PathVariable @RequestBody Long id){
        return ResponseEntity.ok(vendorService.findVendorById(id));
    }

}
