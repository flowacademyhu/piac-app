package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MarketService {

    private final MarketRepository marketRepository;

    public Market addMarket(MarketDTO marketDTO){
        Market market = Market.builder()
                .date(marketDTO.getDate())
                .name(marketDTO.getName())
                .place(marketDTO.getPlace())
                .build();
        return marketRepository.save(market);
    }

    public List<Market> allMarkets(){
        return marketRepository.findAll();
    }

    public Market getMarketById(Long id) {
        return marketRepository.findById(id).orElseThrow();
    }

    public void deleteAllMarkets() {
        marketRepository.deleteAll();
    }

    public void deleteMarketById(Long id) {
        marketRepository.deleteById(id);
    }

    public Market updateMarketById(Long id, MarketDTO marketDTO) {
        Market market = getMarketById(id);
        market.builder()
                .date(marketDTO.getDate())
                .place(marketDTO.getPlace())

                .name(marketDTO.getName())
                .build();
        return marketRepository.save(market);
    }
}