package org.flowacademy.hu.market.app.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.flowacademy.hu.market.app.exceptions.NoSuchAdminException;
import org.flowacademy.hu.market.app.services.AuthenticationService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@ExtendWith(SpringExtension.class)
@TestWebSecurityConfig
@WebMvcTest(controllers = LoginController.class)
@Import({ LoginController.class, ErrorController.class })
class LoginControllerTest {
  @MockBean
  private AuthenticationService authenticationService;

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper mapper;

  @Test
  void whenValidEmail_thenReturns200() throws Exception {
    ObjectNode body = mapper.createObjectNode();
    body.put("emailAddress", "admin@example.com");
    when(authenticationService.createToken("admin@example.com")).thenReturn("Success message!");

    mockMvc.perform(post("/v1/api/login")
        .content(body.toString())
        .contentType("application/json"))
        .andExpect(status().isOk())
        .andExpect(content().string("Success message!"));

    verify(authenticationService, times(1)).createToken("admin@example.com");
  }

  @Test
  void whenInvalidEmail_thenReturns400() throws Exception {
    ObjectNode body = mapper.createObjectNode();
    body.put("emailAddress", "admin@example.com");
    when(authenticationService.createToken("admin@example.com")).thenThrow(new NoSuchAdminException());

    ObjectNode response = mapper.createObjectNode();
    response.put("error", "NO_SUCH_ADMIN");

    mockMvc.perform(post("/v1/api/login")
        .content(body.toString())
        .contentType("application/json"))
        .andExpect(status().isBadRequest())
        .andExpect(content().json(response.toString()));

    verify(authenticationService, times(1)).createToken("admin@example.com");
  }
}