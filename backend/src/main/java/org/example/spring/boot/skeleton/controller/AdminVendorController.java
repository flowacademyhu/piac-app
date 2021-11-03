package org.example.spring.boot.skeleton.controller;

import lombok.AllArgsConstructor;

import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.services.VendorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api/admin/vendor")
@AllArgsConstructor
@CrossOrigin
public class AdminVendorController {

    private final VendorService vendorService;

    @PostMapping
    public ResponseEntity<DetailVendorDTO> addVendorToMarket(@RequestBody VendorDTO vendorDTO) throws Exception {
        return ResponseEntity.ok(vendorService.addVendor(vendorDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> updateVendor(@PathVariable @RequestBody Long id, @RequestBody VendorDTO vendorDTO) throws Exception {
        return ResponseEntity.ok(vendorService.updateVendor(id, vendorDTO));
    }

    @DeleteMapping
    public void deleteAllVendors(){
        vendorService.deleteAllVendors();
    }

    @DeleteMapping("/{id}")
    public void deleteVendorById(@PathVariable @RequestBody Long id){
        vendorService.deleteVendorById(id);
    }
}
