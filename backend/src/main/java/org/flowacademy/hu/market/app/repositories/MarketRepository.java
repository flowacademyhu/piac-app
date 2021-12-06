package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findByName(String name);

    @Query("SELECT markets FROM Market markets WHERE markets.closingDate > UNIX_TIMESTAMP(CONVERT_TZ(DATE_FORMAT(CONVERT_TZ(UTC_TIMESTAMP(), 'UTC', 'Europe/Budapest'), '%Y-%m-%d'), 'Europe/Budapest', 'UTC'))")
    List<Market> findAllUpcomingMarkets();

    @Query("SELECT markets FROM Market markets WHERE markets.id IN :marketId")
    Set<Market> findMarketsById(@Param("marketId") Set<Long> marketIds);
}
