package org.flowacademy.hu.market.app.controller;

import lombok.AllArgsConstructor;
import org.flowacademy.hu.market.app.model.DetailVendorDTO;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.services.VendorService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api/admin/vendor")
@AllArgsConstructor
@CrossOrigin
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class AdminVendorController {

    private final VendorService vendorService;

    @PostMapping
    public ResponseEntity<DetailVendorDTO> addVendorToMarket(@RequestBody VendorDTO vendorDTO) throws Exception {
        return ResponseEntity.ok(vendorService.addVendor(vendorDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetailVendorDTO> updateVendor(@PathVariable @RequestBody Long id,
            @RequestBody VendorDTO vendorDTO) throws Exception {
        return ResponseEntity.ok(vendorService.updateVendor(id, vendorDTO));
    }

    @DeleteMapping
    public void deleteAllVendors() {
        vendorService.deleteAllVendors();
    }

    @DeleteMapping("/{id}")
    public void deleteVendorById(@PathVariable @RequestBody Long id) {
        vendorService.deleteVendorById(id);
    }
}
