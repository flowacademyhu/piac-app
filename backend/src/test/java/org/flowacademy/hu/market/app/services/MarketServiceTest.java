package org.flowacademy.hu.market.app.services;

import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;


class MarketServiceTest {

    @Mock
    MarketRepository marketRepository;

    @InjectMocks
    MarketService marketService;

    @Test
    public void deleteMarketById() {

    }
}