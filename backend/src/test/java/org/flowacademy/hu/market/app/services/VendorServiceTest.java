package org.flowacademy.hu.market.app.services;

import org.flowacademy.hu.market.app.entities.Vendor;
import org.flowacademy.hu.market.app.model.DetailVendorDTO;
import org.flowacademy.hu.market.app.model.SimpleVendorDTO;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.flowacademy.hu.market.app.repositories.VendorRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class VendorServiceTest {

    @Mock
    VendorRepository vendorRepository;

    @Mock
    MarketRepository marketRepository;

    @InjectMocks
    VendorService vendorService;

    @Captor
    private ArgumentCaptor<Vendor> vendorCaptor;

    @Test
    public void shouldDeleteVendorByIdWithDeleteByIdMethod() {
        vendorService.deleteVendorById(5261l);

        verify(vendorRepository).deleteById(5261l);
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
        assertEquals(123456l, simpleDTO.getId());
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

    @Test
    public void shouldUpdateVendor() throws Exception {
        Vendor vendor = new Vendor()
                .setName("Példa")
                .setProfilePic("shorturl.at/bkKW4")
                .setIntro("Bemutatkozok röviden.")
                .setCardPayment(false)
                .setIntroductionLong("Bemutatkozok hosszan, mert bőbeszédű vagyok.")
                .setProducts(new HashSet<>(Arrays.asList("termék 1", "termék 2", "termék 3")))
                .setEmail("peldaemail@gmail.com")
                .setFacebook("peldafacebook")
                .setInstagram("peldainstagram")
                .setPhone("06701234567")
                .setWebSite("https://www.peldaoldal.hu");

        when(marketRepository.findMarketsById(any())).thenReturn(new HashSet<>());
        when(vendorRepository.findById(1L)).thenReturn(Optional.ofNullable(vendor));

        VendorDTO updatedVendorDTO = new VendorDTO()
                .setName("Más példa")
                .setProfilePic("shorturl.at/aor3")
                .setIntro("Más bemutatkozás röviden.")
                .setCardPayment(true)
                .setIntroductionLong("Más bemutatkozás hosszán, mert még mindig bőbeszédű vagyok.")
                .setProducts(new HashSet<>(Arrays.asList("termék 4", "termék 5", "más termék 1")))
                .setEmail("maspeldaemail@gmail.com")
                .setFacebook("maspeldafacebook")
                .setInstagram("maspeldainstagram")
                .setPhone("06707654321")
                .setWebSite("https://www.maspeldaoldal.hu");

        vendorService.updateVendor(1L, updatedVendorDTO);

        verify(vendorRepository).save(vendorCaptor.capture());

        Vendor savedVendor = vendorCaptor.getValue();

        assertEquals("Más példa", savedVendor.getName());
        assertEquals("shorturl.at/aor3", savedVendor.getProfilePic());
        assertEquals("Más bemutatkozás röviden.", savedVendor.getIntro());
        assertTrue(savedVendor.getCardPayment());
        assertEquals("Más bemutatkozás hosszán, mert még mindig bőbeszédű vagyok.", savedVendor.getIntroductionLong());
        assertEquals(new HashSet<>(Arrays.asList("termék 4", "termék 5", "más termék 1")), savedVendor.getProducts());
        assertEquals("maspeldaemail@gmail.com", savedVendor.getEmail());
        assertEquals("maspeldafacebook", savedVendor.getFacebook());
        assertEquals("maspeldainstagram", savedVendor.getInstagram());
        assertEquals("06707654321", savedVendor.getPhone());
        assertEquals("https://www.maspeldaoldal.hu", savedVendor.getWebSite());

    }
}