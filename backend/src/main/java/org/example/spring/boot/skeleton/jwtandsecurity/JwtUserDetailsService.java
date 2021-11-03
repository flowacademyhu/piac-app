package org.example.spring.boot.skeleton.jwtandsecurity;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Value(value = "${admin.name}")
    private String adminName;
    @Value(value = "${randomAdminPassword}")
    private String password;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (adminName.equals(username)) {
            var authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"));
            return new User(adminName, password, authorities);
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }
}