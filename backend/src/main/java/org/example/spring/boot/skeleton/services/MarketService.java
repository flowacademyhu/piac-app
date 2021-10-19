package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

}