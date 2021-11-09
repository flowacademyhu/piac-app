package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
