package org.flowacademy.hu.market.app.services;

import org.flowacademy.hu.market.app.entities.Vendor;
import org.flowacademy.hu.market.app.model.DetailVendorDTO;
import org.flowacademy.hu.market.app.model.SimpleVendorDTO;
import org.flowacademy.hu.market.app.repositories.VendorRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class VendorServiceTest {

    @Mock
    VendorRepository vendorRepository;

    @InjectMocks
    VendorService vendorService;

    @Test
    public void shouldDeleteVendorByIdWithDeleteByIdMethod() {
        vendorService.deleteVendorById(5261l);

        Mockito.verify(vendorRepository).deleteById(5261l);
    }

    @Test
    public void shouldAddAVendorAndCheckTheirInformationsAreCorrect() {
        Vendor vendor = new Vendor()
                .setIntro("Rövid bemutatkozás")
                .setName("Obi-wan Kenobi")
                .setProfilePic("profilpic")
                .setId(123456l)
                .setProducts(new HashSet<>(Arrays.asList("Alma", "Körte", "Barack")))
                .setIntroductionLong("Hosszú bemutatkozás");

        SimpleVendorDTO simpleDTO = vendorService.vendorToSimpleDTO(vendor);

        Set<String> products = simpleDTO.getProducts();

        assertEquals("Rövid bemutatkozás", simpleDTO.getIntro());
        assertEquals("Obi-wan Kenobi", simpleDTO.getName());
        assertEquals("profilpic", simpleDTO.getProfilePic());
        assertEquals(123456l , simpleDTO.getId());
        assertEquals(3, simpleDTO.getProducts().size());
        assertEquals(products, simpleDTO.getProducts());
        assertEquals("Hosszú bemutatkozás", simpleDTO.getIntroductionLong());
    }

    @Test
    public void shouldAddAVendorToAListAndTestTheListForCases() {
        List<Vendor> vendorList = new ArrayList<>();
        vendorList.add(new Vendor().setName("Sajt"));
        vendorList.add(new Vendor().setName("Alma"));
        when(vendorRepository.findAll()).thenReturn(vendorList);

        List<DetailVendorDTO> sortedList = vendorService.allVendors();

        assertEquals(2, sortedList.size());
        assertEquals("Alma", sortedList.get(0).getName());
        assertEquals("Sajt", sortedList.get(1).getName());
    }
}