package org.flowacademy.hu.market.app.jwtandsecurity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
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
    void getUsernameFromTokenCorrectToken() {
        String token = jwtBuilder.compact();

        assertEquals("admin@example.com", tokenManager.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromTokenMalformedToken() {
        String token = "itsamess";

        assertNull(tokenManager.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromTokenExpiredToken() {
        String token = jwtBuilder.setExpiration(pastDate).compact();

        assertNull(tokenManager.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromTokenWithoutExpiration() {
        String token = jwtBuilder.setExpiration(null).compact();

        assertNull(tokenManager.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromTokenWithoutSignature() {
        String token = Jwts.builder()
                .setSubject("admin@example.com")
                .setExpiration(futureDate)
                .compact();

        assertNull(tokenManager.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromTokenWithOtherSignature() {
        String token = jwtBuilder
                .signWith(SignatureAlgorithm.HS512, "otherSecret".getBytes())
                .compact();

        assertNull(tokenManager.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromTokenWithOtherSignature2() {
        String token = jwtBuilder
                .signWith(SignatureAlgorithm.HS512, "secret1".getBytes())
                .compact();

        assertNull(tokenManager.getUsernameFromToken(token));
    }

    @Test
    void generateTokenReturnsCorrectToken() {
        String token = tokenManager.generateToken("admin@example.com");

        var jwt = Jwts.parser().setSigningKey("secret".getBytes()).parseClaimsJws(token);
        Claims claims = jwt.getBody();

        assertEquals("admin@example.com", claims.getSubject());
        assertTrue(Math.abs(new Date().getTime() - claims.getIssuedAt().getTime()) < 1000, "Issued at is not now");
        long expiration = Math.abs(new Date().getTime() - claims.getExpiration().getTime()) / 1000;

        assertTrue(Math.abs(expiration - 10 * 60 * 60) < 5, "Expiration is not 10 hours rounded to 5 seconds");
    }
}
