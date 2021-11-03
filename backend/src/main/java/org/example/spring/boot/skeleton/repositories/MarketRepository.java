package org.example.spring.boot.skeleton.repositories;

import org.example.spring.boot.skeleton.entities.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findByName(String name);

    @Query("SELECT markets FROM Market markets WHERE markets.closingDate > UNIX_TIMESTAMP()")
    List<Market> findAllUpcomingMarkets();
}
