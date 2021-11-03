package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.exceptions.NoSuchVendorException;
import org.example.spring.boot.skeleton.model.SimpleVendorDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.springframework.stereotype.Service;

import java.text.ParseException;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MarketService {

    private final MarketRepository marketRepository;
    private final VendorService vendorService;

    public MarketDTO addMarket(MarketDTO marketDTO) throws ParseException {
        marketRepository.save(marketDTOToEntity(marketDTO));
        return marketDTO;
    }

    public List<MarketDTO> allMarkets(){
        return  marketRepository.findAll()
                .stream()
                .map(this::marketToDTO)
                .sorted(Comparator.comparing(MarketDTO::getOpeningDate))
                .peek( m -> m.setVendors(null))
                .collect(Collectors.toList());
    }

    public List<MarketDTO> findAllUpcomingMarkets() {
        return marketRepository.findAllUpcomingMarkets().stream().map(this::marketToDTO).collect(Collectors.toList());
    }

    public MarketDTO getMarketById(Long id) throws Exception {
        return marketToDTO(marketRepository.findById(id).orElseThrow(NoSuchMarketException::new));
    }

    public void deleteAllMarkets() {
        marketRepository.deleteAll();
    }

    public void deleteMarketById(Long id) {
        marketRepository.deleteById(id);
    }

    public MarketDTO updateMarketById(Long id, MarketDTO marketDTO) throws NoSuchMarketException {
        Market market = marketRepository.findById(id).orElseThrow(NoSuchMarketException::new).builder()
                .profilePic(marketDTO.getProfilePic())
                .openingDate(marketDTO.getOpeningDate())
                .closingDate(marketDTO.getClosingDate())
                .place(marketDTO.getPlace())
                .id(id)
                .name(marketDTO.getName())
                .build();
        marketRepository.save(market);
        return marketToDTO(market);
    }

    public List<SimpleVendorDTO> findAllVendorsAtGivenMarket(Long id) throws NoSuchMarketException {
        Market market = marketRepository.findById(id).orElseThrow(NoSuchMarketException::new);
        return market.getVendors().stream().map(vendorService::vendorToSimpleDTO).collect(Collectors.toList());
    }


    public Market marketDTOToEntity(MarketDTO marketDTO) throws ParseException {
        return Market.builder()
                .profilePic(marketDTO.getProfilePic())
                .openingDate(marketDTO.getOpeningDate())
                .closingDate(marketDTO.getClosingDate())
                .name(marketDTO.getName())
                .place(marketDTO.getPlace())
                .build();
    }

    public MarketDTO marketToDTO(Market market) {
        return new MarketDTO()
                .setProfilePic(market.getProfilePic())
                .setId(market.getId())
                .setVendors(market.getVendors().stream().map(vendorService::vendorToSimpleDTO).collect(Collectors.toSet()))
                .setOpeningDate(market.getOpeningDate())
                .setClosingDate(market.getClosingDate())
                .setName(market.getName())
                .setPlace(market.getPlace())
                .setNumberOfVendors(market.getVendors().size());
    }


    public MarketDTO findMarketByName(String name) throws NoSuchVendorException {
       var market = marketRepository.findByName(name).orElseThrow(NoSuchVendorException::new);
        return marketToDTO(market);
    }

}
