package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
}
