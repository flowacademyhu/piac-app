package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    Admin getAdminByToken(String token);
    Admin getAdminByEmail(String emailAddress);
}
