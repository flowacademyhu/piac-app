package org.flowacademy.hu.market.app.jwtandsecurity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenManagerTest {

    private TokenManager tokenManager;

    Date futureDate;
    Date pastDate;
    JwtBuilder jwtBuilder;

    @BeforeEach
    public void setUp() {
        tokenManager = new TokenManager("secret");

        futureDate = new Date(System.currentTimeMillis() + 1000);
        pastDate = new Date(System.currentTimeMillis() - 1000);
        jwtBuilder = Jwts.builder()
                .setSubject("admin@example.com")
                .setExpiration(futureDate)
                .signWith(SignatureAlgorithm.HS512, "secret".getBytes());
    }

    @Test
    void validateCorrectToken() {
        String token = jwtBuilder.compact();

        assertTrue(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateMalformedToken() {
        String token = "itsamess";

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateTokenWithWrongSubject() {
        String token = jwtBuilder.setSubject("user@example.com").compact();

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateExpiredToken() {
        String token = jwtBuilder.setExpiration(pastDate).compact();

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateTokenWithoutExpiration() {
        String token = jwtBuilder.setExpiration(null).compact();

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateTokenWithoutSignature() {
        String token = Jwts.builder()
                .setSubject("admin@example.com")
                .setExpiration(futureDate)
                .compact();

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateTokenWithOtherSignature() {
        String token = jwtBuilder
                .signWith(SignatureAlgorithm.HS512, "otherSecret".getBytes())
                .compact();

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void validateTokenWithOtherSignature2() {
        String token = jwtBuilder
                .signWith(SignatureAlgorithm.HS512, "secret1".getBytes())
                .compact();

        assertFalse(tokenManager.validateJwtToken(token, "admin@example.com"));
    }

    @Test
    void generateJwtTokenReturnsCorrectToken() {
        String token = tokenManager.generateJwtToken("admin@example.com");

        var jwt = Jwts.parser().setSigningKey("secret".getBytes()).parseClaimsJws(token);
        Claims claims = jwt.getBody();

        assertEquals("admin@example.com", claims.getSubject());
        assertTrue(Math.abs(new Date().getTime() - claims.getIssuedAt().getTime()) < 1000, "Issued at is not now");
        long expiration = Math.abs(new Date().getTime() - claims.getExpiration().getTime()) / 1000;

        assertTrue(Math.abs(expiration - 10 * 60 * 60) < 5, "Expiration is not 10 hours rounded to 5 seconds");
    }
}
