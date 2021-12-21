package org.flowacademy.hu.market.app.jwtandsecurity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@ExtendWith(MockitoExtension.class)
public class JwtFilterTest {

    private JwtFilter jwtFilter;

    @Mock
    private TokenManager tokenManager;

    @Mock
    private UserDetailsService userDetailsService;

    @Mock
    private FilterChain filterChain;

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    private StringWriter responseStringWriter;

    @BeforeEach
    void setUp() {
        jwtFilter = new JwtFilter(userDetailsService, tokenManager);
        SecurityContextHolder.getContext().setAuthentication(null);
    }

    void stubResponse() throws IOException {
        responseStringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(responseStringWriter);
        when(response.getWriter()).thenReturn(writer);
    }

    @Test
    void withoutTokenItCallsFilterChain() throws ServletException, IOException {
        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNull(SecurityContextHolder.getContext().getAuthentication());
    }

    @Test
    void withoutBearerTokenItCallsFilterChain() throws ServletException, IOException {
        when(request.getHeader("Authorization")).thenReturn("not bearer token");

        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);
        assertNull(SecurityContextHolder.getContext().getAuthentication());
    }

    @Test
    void withPreconfiguredAuthenticationItDoesNotChangeIt() throws ServletException, IOException {
        when(request.getHeader("Authorization")).thenReturn("Bearer token");
        Authentication dummyAuthentication = mock(Authentication.class);
        SecurityContextHolder.getContext().setAuthentication(dummyAuthentication);

        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);

        assertEquals(dummyAuthentication, SecurityContextHolder.getContext().getAuthentication());
    }

    @Test
    void withWrongToken() throws ServletException, IOException {
        stubResponse();
        when(request.getHeader("Authorization")).thenReturn("Bearer token");

        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain, never()).doFilter(request, response);

        assertUnauthenticated();
    }

    @Test
    void withUnknownUser() throws ServletException, IOException {
        stubResponse();
        when(request.getHeader("Authorization")).thenReturn("Bearer dummyToken");
        when(tokenManager.getUsernameFromToken("dummyToken")).thenReturn("unknown@example.com");
        when(userDetailsService.loadUserByUsername("unknown@example.com"))
                .thenThrow(new UsernameNotFoundException("Unknown user"));

        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain, never()).doFilter(request, response);

        assertUnauthenticated();
    }

    @Test
    void withAdminUser() throws ServletException, IOException {
        var authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"));
        UserDetails adminUserDetails = new User("admin@example.com", "password", authorities);
        when(request.getHeader("Authorization")).thenReturn("Bearer dummyToken");
        when(tokenManager.getUsernameFromToken("dummyToken")).thenReturn("admin@example.com");
        when(userDetailsService.loadUserByUsername("admin@example.com")).thenReturn(adminUserDetails);

        jwtFilter.doFilterInternal(request, response, filterChain);

        verify(filterChain).doFilter(request, response);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        assertEquals(1, authentication.getAuthorities().size());
        SimpleGrantedAuthority authority = (SimpleGrantedAuthority) authentication.getAuthorities().iterator().next();
        assertEquals("ROLE_ADMIN", authority.getAuthority());
        assertEquals("admin@example.com", authentication.getName());
    }

    private void assertUnauthenticated() {
        assertNull(SecurityContextHolder.getContext().getAuthentication());

        verify(response).setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        assertEquals("{\"error\":\"INVALID_CREDENTIALS\"}", responseStringWriter.toString());
    }
}
