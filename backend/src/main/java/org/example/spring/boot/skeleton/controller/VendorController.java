package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.exceptions.NoSuchVendorException;
import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.model.SimpleMarketDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.example.spring.boot.skeleton.services.VendorService;
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
    public ResponseEntity<List<DetailVendorDTO>> allVendors(){
        return ResponseEntity.ok(vendorService.allVendors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> findVendorById(@PathVariable @RequestBody Long id) throws NoSuchVendorException {
        return ResponseEntity.ok(vendorService.findVendorById(id));
    }


    @PutMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> updateVendor(@PathVariable @RequestBody Long id, @Validated @RequestBody VendorDTO vendorDTO) throws Exception {
        return ResponseEntity.ok(vendorService.updateVendor(id, vendorDTO));
    }

    @GetMapping("/{id}/markets")
    public ResponseEntity<List<SimpleMarketDTO>> getAllMarketsByVendorId(@PathVariable @RequestBody Long id) throws NoSuchVendorException{
        return ResponseEntity.ok(marketService.findAllMarketsByVendorId(id));
    }

}
