package org.flowacademy.hu.market.app.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.flowacademy.hu.market.app.services.VendorService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@ExtendWith(SpringExtension.class)
@TestWebSecurityConfig
@WebMvcTest(controllers = AdminVendorController.class)
@Import(AdminVendorController.class)
class AdminVendorControllerTest {
  @MockBean
  private VendorService vendorService;

  @Autowired
  private MockMvc mockMvc;

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
}