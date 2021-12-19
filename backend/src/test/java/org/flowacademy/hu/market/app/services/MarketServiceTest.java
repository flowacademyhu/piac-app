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
    public void deleteMarketById() {
        marketService.deleteMarketById(1234l);

        Mockito.verify(marketRepository).deleteById(1234l);
    }

    @Test
    public void marketToDTO() {
        Market market = new Market()
                .setId(12345l)
                .setProfilePic("profilePic")
                .setName("Vásár")
                .setOpeningDate(123l)
                .setClosingDate(345l)
                .setPlace("Szeged");

        SimpleMarketDTO simpleDTO = marketService.marketToSimpleDTO(market);

        assertEquals(12345l, simpleDTO.getId());
        assertEquals("profilePic", simpleDTO.getProfilePic());
        assertEquals("Vásár", simpleDTO.getName());
        assertEquals(123l, simpleDTO.getOpeningDate());
        assertEquals(345l, simpleDTO.getClosingDate());
        assertEquals("Szeged", simpleDTO.getPlace());
    }

    @Test
    public void should_add_a_market_to_a_list_and_test_the_list_for_cases() {
        List<Market> marketList = new ArrayList<>();

        marketList.add(new Market().setName("Valami"));

        marketList.add(new Market().setName("Árus"));
        marketList.add(new Market().setName("Másik árus"));
        when(marketRepository.findAll()).thenReturn(marketList);



    }
}