package org.flowacademy.hu.market.app.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.services.VendorService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.HashSet;

@ExtendWith(SpringExtension.class)
@TestWebSecurityConfig
@WebMvcTest(controllers = AdminVendorController.class)
@Import(AdminVendorController.class)
class AdminVendorControllerTest {
  @MockBean
  private VendorService vendorService;

  @Autowired
  private MockMvc mockMvc;

  @Captor
  private ArgumentCaptor<VendorDTO> vendorDTOCaptor;

  @Test
  void deleteVendorIsForbiddenWithUnknownUser() throws Exception {
    mockMvc.perform(delete("/v1/api/admin/vendor/1337")
        .contentType("application/json"))
        .andExpect(status().isUnauthorized());

    verify(vendorService, never()).deleteVendorById(any());
  }

  @Test
  @WithMockUser(username = "admin@example.com", roles = { "USER", "ADMIN" })
  void deleteVendorWithAdminUser() throws Exception {
    mockMvc.perform(delete("/v1/api/admin/vendor/1337")
        .contentType("application/json"))
        .andExpect(status().isOk());

    verify(vendorService).deleteVendorById(1337L);
  }

  @Test
  void updatingVendorIsForbiddenWithUnknownUser() throws Exception {
    VendorDTO vendorDTO = new VendorDTO()
            .setName("Példa")
            .setProfilePic("shorturl.at/bkKW4")
            .setIntro("Bemutatkozok röviden.")
            .setCardPayment(false)
            .setMarketIds(new HashSet<>(Arrays.asList(123L, 456L, 789L)))
            .setIntroductionLong("Bemutatkozok hosszan, mert bőbeszédű vagyok.");

    ObjectMapper objectMapper = new ObjectMapper();

    mockMvc.perform(put("/v1/api/admin/vendor/1337")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(vendorDTO))
                    .accept("application/json"))
            .andExpect(status().isUnauthorized());

    verify(vendorService, never()).updateVendor(any(), any());
  }

  @Test
  @WithMockUser(username = "admin@example.com", roles = { "USER", "ADMIN" })
  void updateVendorWithAdminUser() throws Exception {
    VendorDTO vendorDTO = new VendorDTO()
            .setName("Példa")
            .setProfilePic("shorturl.at/bkKW4")
            .setIntro("Bemutatkozok röviden.")
            .setCardPayment(false)
            .setMarketIds(new HashSet<>(Arrays.asList(123L, 456L, 789L)))
            .setIntroductionLong("Bemutatkozok hosszan, mert bőbeszédű vagyok.")
            .setProducts(new HashSet<>(Arrays.asList("termék 1", "termék 2", "termék 3")))
            .setEmail("peldaemail@gmail.com")
            .setFacebook("peldafacebook")
            .setInstagram("peldainstagram")
            .setPhone("06701234567")
            .setWebSite("https://www.peldaoldal.hu");


    ObjectMapper objectMapper = new ObjectMapper();

    mockMvc.perform(put("/v1/api/admin/vendor/1337")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(vendorDTO))
                    .accept("application/json"))
            .andExpect(status().isOk());

    verify(vendorService).updateVendor(eq(1337L), vendorDTOCaptor.capture());

    VendorDTO actualVendorDTO = vendorDTOCaptor.getValue();

    assertEquals("Példa", actualVendorDTO.getName());
    assertEquals("shorturl.at/bkKW4", actualVendorDTO.getProfilePic());
    assertEquals("Bemutatkozok röviden.", actualVendorDTO.getIntro());
    assertFalse(actualVendorDTO.getCardPayment());
    assertEquals("Példa", actualVendorDTO.getName());
    assertEquals(new HashSet<>(Arrays.asList(123L, 456L, 789L)), actualVendorDTO.getMarketIds());
    assertEquals("Bemutatkozok hosszan, mert bőbeszédű vagyok.", actualVendorDTO.getIntroductionLong());
    assertEquals(new HashSet<>(Arrays.asList("termék 1", "termék 2", "termék 3")), actualVendorDTO.getProducts());
    assertEquals("peldaemail@gmail.com", actualVendorDTO.getEmail());
    assertEquals("peldafacebook", actualVendorDTO.getFacebook());
    assertEquals("peldainstagram", actualVendorDTO.getInstagram());
    assertEquals("06701234567", actualVendorDTO.getPhone());
    assertEquals("https://www.peldaoldal.hu", actualVendorDTO.getWebSite());
  }

  @Test
  void addingVendorIsForbiddenWithUnknownUser() throws Exception {
    VendorDTO vendorDTO = new VendorDTO()
            .setName("Példa")
            .setProfilePic("shorturl.at/bkKW4")
            .setIntro("Bemutatkozok röviden.")
            .setCardPayment(false)
            .setMarketIds(new HashSet<>(Arrays.asList(123L, 456L, 789L)))
            .setIntroductionLong("Bemutatkozok hosszan, mert bőbeszédű vagyok.");

    ObjectMapper objectMapper = new ObjectMapper();

    mockMvc.perform(post("/v1/api/admin/vendor")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(vendorDTO))
                    .accept("application/json"))
            .andExpect(status().isUnauthorized());

    verify(vendorService, never()).addVendor(any());
  }

  @Test
  @WithMockUser(username = "admin@example.com", roles = { "USER", "ADMIN" })
  void addVendorWithAdminUser() throws Exception {
    VendorDTO vendorDTO = new VendorDTO()
            .setName("Példa")
            .setProfilePic("shorturl.at/bkKW4")
            .setIntro("Bemutatkozok röviden.")
            .setCardPayment(false)
            .setMarketIds(new HashSet<>(Arrays.asList(123L, 456L, 789L)))
            .setIntroductionLong("Bemutatkozok hosszan, mert bőbeszédű vagyok.")
            .setProducts(new HashSet<>(Arrays.asList("termék 1", "termék 2", "termék 3")))
            .setEmail("peldaemail@gmail.com")
            .setFacebook("peldafacebook")
            .setInstagram("peldainstagram")
            .setPhone("06701234567")
            .setWebSite("https://www.peldaoldal.hu");


    ObjectMapper objectMapper = new ObjectMapper();

    mockMvc.perform(post("/v1/api/admin/vendor")
                    .contentType("application/json")
                    .content(objectMapper.writeValueAsString(vendorDTO))
                    .accept("application/json"))
            .andExpect(status().isOk());

    verify(vendorService).addVendor(vendorDTOCaptor.capture());

    VendorDTO actualVendorDTO = vendorDTOCaptor.getValue();

    assertEquals("Példa", actualVendorDTO.getName());
    assertEquals("shorturl.at/bkKW4", actualVendorDTO.getProfilePic());
    assertEquals("Bemutatkozok röviden.", actualVendorDTO.getIntro());
    assertFalse(actualVendorDTO.getCardPayment());
    assertEquals("Példa", actualVendorDTO.getName());
    assertEquals(new HashSet<>(Arrays.asList(123L, 456L, 789L)), actualVendorDTO.getMarketIds());
    assertEquals("Bemutatkozok hosszan, mert bőbeszédű vagyok.", actualVendorDTO.getIntroductionLong());
    assertEquals(new HashSet<>(Arrays.asList("termék 1", "termék 2", "termék 3")), actualVendorDTO.getProducts());
    assertEquals("peldaemail@gmail.com", actualVendorDTO.getEmail());
    assertEquals("peldafacebook", actualVendorDTO.getFacebook());
    assertEquals("peldainstagram", actualVendorDTO.getInstagram());
    assertEquals("06701234567", actualVendorDTO.getPhone());
    assertEquals("https://www.peldaoldal.hu", actualVendorDTO.getWebSite());
  }
}