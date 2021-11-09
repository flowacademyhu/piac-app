package org.flowacademy.hu.market.app.jwtandsecurity;

import java.util.Collections;
import java.util.List;

import org.flowacademy.hu.market.app.exceptions.NoSuchAdminException;
import org.flowacademy.hu.market.app.repositories.AdminRepository;
import org.flowacademy.hu.market.app.entities.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;

    @Value(value = "${randomAdminPassword}")
    private String password;

    public JwtUserDetailsService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin findAdmin(String emailAddress) throws NoSuchAdminException {
        Admin admin = adminRepository.getAdminByEmail(emailAddress);
        if(admin != null ){
            return admin;
        }
        throw new NoSuchAdminException();
    }

    public List<Admin> findAllAdmins(){
        return adminRepository.findAll();
    }

    public void saveAdmin(Admin admin){
        adminRepository.saveAndFlush(admin);
    }

    public Admin getAdminByToken(String token){
     try{
         adminRepository.getAdminByGeneratedString(token);
     }
     catch(NullPointerException e){
         e.printStackTrace();
     }
        return adminRepository.getAdminByGeneratedString(token);
    }


    @Override
    public UserDetails loadUserByUsername(String emailAddress) {
        Admin admin = null;
        try {
            admin = findAdmin(emailAddress);
        } catch (NoSuchAdminException e) {
            e.printStackTrace();
        }
        if (admin.getEmail().equals(emailAddress)) {
            var authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"));
            return new User(admin.getEmail(), password, authorities);
        } else {
            throw new UsernameNotFoundException("User not found with emailAddress: " + emailAddress);
        }
    }
}