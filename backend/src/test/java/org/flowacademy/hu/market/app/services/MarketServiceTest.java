package org.flowacademy.hu.market.app.services;

import org.flowacademy.hu.market.app.entities.Market;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class MarketServiceTest {

    private final MarketRepository marketRepository = Mockito.mock(MarketRepository.class);

    @Test
    void deleteAllMarkets() throws NullPointerException{
        Market market = new Market();
        Market market1 = new Market();
        Market market2 = new Market();
        marketRepository.save(market);
        marketRepository.save(market1);
        marketRepository.save(market2);
        marketRepository.deleteAll();
        Optional optional = marketRepository.findById(market.getId());
        assertEquals(Optional.empty(), optional);
    }

    @Test
    void deleteMarketById() throws NullPointerException{
        Market market = new Market();
        marketRepository.save(market);
        marketRepository.deleteById(market.getId());
        Optional optional = marketRepository.findById(market.getId());
        assertEquals(Optional.empty(), optional);
    }
}