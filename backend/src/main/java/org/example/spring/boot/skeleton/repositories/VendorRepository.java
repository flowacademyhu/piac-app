package org.example.spring.boot.skeleton.repositories;

import org.example.spring.boot.skeleton.entities.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {

}
