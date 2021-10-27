package org.example.spring.boot.skeleton.repositories;

import org.example.spring.boot.skeleton.entities.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findById(Long id);
    Optional<Market> findByName(String name);

}
