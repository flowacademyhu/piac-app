package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findByName(String name);

    @Query("SELECT markets FROM Market markets WHERE markets.closingDate > unix_timestamp(date_format(addtime(now(),'01:00:00'),'%Y-%m-%d'))+86400")
    List<Market> findAllUpcomingMarkets();
}
