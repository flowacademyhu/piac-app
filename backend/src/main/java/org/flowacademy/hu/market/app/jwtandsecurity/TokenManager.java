package org.flowacademy.hu.market.app.jwtandsecurity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class TokenManager implements Serializable {

    private static final long serialVersionUID = 7008375124389347049L;
    public static final long TOKEN_VALIDITY = 10 * 60 * 60;

    private String jwtSecret;

    public TokenManager(@Value("${tokenSecret}") String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }

    public String generateToken(String subject) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder().setClaims(claims).setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, getSecret()).compact();
    }

    public String getUsernameFromToken(String token) {
        try {
            final Claims claims = Jwts.parser()
                    .setSigningKey(getSecret())
                    .parseClaimsJws(token)
                    .getBody();
            boolean hasExpiration = claims.getExpiration() != null;
            if (!hasExpiration) {
                return null;
            }
            return claims.getSubject();
        } catch (Exception e) {
            return null;
        }
    }

    private byte[] getSecret() {
        return jwtSecret.getBytes();
    }
}