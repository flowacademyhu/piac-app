package org.flowacademy.hu.market.app.services;

import org.flowacademy.hu.market.app.entities.Vendor;
import org.flowacademy.hu.market.app.repositories.VendorRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class VendorServiceTest {

    VendorRepository vendorRepository = Mockito.mock(VendorRepository.class);

    @Test
    void deleteAllVendors() {
        Vendor vendor = new Vendor();
        Vendor vendor1 = new Vendor();
        Vendor vendor2 = new Vendor();
        vendorRepository.save(vendor);
        vendorRepository.save(vendor1);
        vendorRepository.save(vendor2);
        vendorRepository.deleteAll();
        Optional optional = vendorRepository.findById(vendor.getId());
        assertEquals(Optional.empty(), optional);
    }

    @Test
    void deleteVendorById() {
        Vendor vendor = new Vendor();
        vendorRepository.save(vendor);
        vendorRepository.deleteById(vendor.getId());
        Optional optional = vendorRepository.findById(vendor.getId());
        assertEquals(Optional.empty(), optional);
    }
}