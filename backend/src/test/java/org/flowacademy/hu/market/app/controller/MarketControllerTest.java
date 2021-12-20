package org.flowacademy.hu.market.app.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.flowacademy.hu.market.app.model.SimpleMarketDTO;
import org.flowacademy.hu.market.app.services.MarketService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@ExtendWith(SpringExtension.class)
@TestWebSecurityConfig
@WebMvcTest(controllers = MarketController.class)
@Import(MarketController.class)
class MarketControllerTest {
  @MockBean
  private MarketService marketService;

  @Autowired
  private MockMvc mockMvc;

  @Test
  @WithAnonymousUser
  void whenValidInput_thenReturns200() throws Exception {
    List<SimpleMarketDTO> marketList = new ArrayList<>();

    marketList.add(SimpleMarketDTO.builder()
        .id(12L)
        .name("Bödön Piac")
        .place("Szeged Pláza")
        .profilePic("https://example.com/images/bodon.png")
        .openingDate(1630767600L)
        .closingDate(1639832386L)
        .numberOfVendors(12)
        .build());

    marketList.add(SimpleMarketDTO.builder()
        .id(5678L)
        .name("Másik Piac")
        .place("Világvége")
        .profilePic("https://example.com/images/masik.png")
        .openingDate(1630817600L)
        .closingDate(1639818386L)
        .numberOfVendors(0)
        .build());

    when(marketService.allMarkets()).thenReturn(marketList);

    mockMvc.perform(get("/v1/api/market")
        .contentType("application/json"))
        .andExpect(status().isOk())

        .andExpect(jsonPath("[0].id").value(12))
        .andExpect(jsonPath("[0].name").value("Bödön Piac"))
        .andExpect(jsonPath("[0].place").value("Szeged Pláza"))
        .andExpect(jsonPath("[0].profilePic").value("https://example.com/images/bodon.png"))
        .andExpect(jsonPath("[0].openingDate").value(1630767600L))
        .andExpect(jsonPath("[0].closingDate").value(1639832386L))
        .andExpect(jsonPath("[0].numberOfVendors").value(12))

        .andExpect(jsonPath("[1].id").value(5678))
        .andExpect(jsonPath("[1].name").value("Másik Piac"))
        .andExpect(jsonPath("[1].place").value("Világvége"))
        .andExpect(jsonPath("[1].profilePic").value("https://example.com/images/masik.png"))
        .andExpect(jsonPath("[1].openingDate").value(1630817600L))
        .andExpect(jsonPath("[1].closingDate").value(1639818386L))
        .andExpect(jsonPath("[1].numberOfVendors").value(0));
  }
}