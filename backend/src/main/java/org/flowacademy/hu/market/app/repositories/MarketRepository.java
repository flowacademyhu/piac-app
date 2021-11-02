package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findByName(String name);
}
