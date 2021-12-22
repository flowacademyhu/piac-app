package org.flowacademy.hu.market.app.services;

import org.flowacademy.hu.market.app.entities.Market;
import org.flowacademy.hu.market.app.model.SimpleMarketDTO;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MarketServiceTest {

    @Mock
    MarketRepository marketRepository;

    @InjectMocks
    MarketService marketService;

    @Test
    public void shouldDeleteMarketByIdWithDeleteByIdMethod() {
        marketService.deleteMarketById(1234l);

        Mockito.verify(marketRepository).deleteById(1234l);
    }

    @Test
    public void shouldAddAMarketAndCheckTheirInformationsAreCorrect() {
        Market market = Market.builder()
                .id(12345l)
                .profilePic("profilePic")
                .name("Vásár")
                .openingDate(123l)
                .closingDate(345l)
                .place("Szeged")
                .build();

        SimpleMarketDTO simpleDTO = marketService.marketToSimpleDTO(market);

        assertEquals(12345l, simpleDTO.getId());
        assertEquals("profilePic", simpleDTO.getProfilePic());
        assertEquals("Vásár", simpleDTO.getName());
        assertEquals(123l, simpleDTO.getOpeningDate());
        assertEquals(345l, simpleDTO.getClosingDate());
        assertEquals("Szeged", simpleDTO.getPlace());
    }

    @Test
    public void shouldAddAMarketToAListAndTestTheListForCases() {
        List<Market> marketList = new ArrayList<>();

        marketList.add(Market
                .builder()
                .name("Árus")
                .openingDate(123l)
                .build());
        marketList.add(Market
                .builder()
                .name("Másik árus")
                .openingDate(456l)
                .build());
        when(marketRepository.findAll()).thenReturn(marketList);

        List<SimpleMarketDTO> sortedMarketList = marketService.allMarkets();

        assertEquals(2, sortedMarketList.size());
        assertEquals("Árus", sortedMarketList.get(0).getName());
        assertEquals("Másik árus", sortedMarketList.get(1).getName());
    }
}