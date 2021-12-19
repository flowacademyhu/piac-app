package org.flowacademy.hu.market.app.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.flowacademy.hu.market.app.services.MarketService;
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
@WebMvcTest(controllers = AdminMarketController.class)
@Import(AdminMarketController.class)
class AdminMarketControllerTest {
  @MockBean
  private MarketService marketService;

  @Autowired
  private MockMvc mockMvc;

  @Test
  void deleteMarketIsForbiddenWithUnknownUser() throws Exception {
    mockMvc.perform(delete("/v1/api/admin/market/1337")
        .contentType("application/json"))
        .andExpect(status().isUnauthorized());

    verify(marketService, never()).deleteMarketById(any());
  }

  @Test
  @WithMockUser(username = "admin@example.com", roles = { "USER", "ADMIN" })
  void deleteMarketWithAdminUser() throws Exception {
    mockMvc.perform(delete("/v1/api/admin/market/1337")
        .contentType("application/json"))
        .andExpect(status().isOk());

    verify(marketService).deleteMarketById(1337L);
  }
}