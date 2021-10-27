package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.exceptions.NoSuchVendorException;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.SimpleVendorDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.example.spring.boot.skeleton.repositories.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MarketService {

    private final MarketRepository marketRepository;
    private final VendorRepository vendorRepository;
    private final VendorService vendorService;

    public Market addMarket(MarketDTO marketDTO) {
        return marketRepository.save(marketDTOToEntity(marketDTO));

    }

    public List<MarketDTO> allMarkets() {
        return marketRepository.findAll()
                .stream()
                .map(this::marketToDTO)
                .sorted(Comparator.comparing(MarketDTO::getDate).reversed())
                .peek(m -> m.setVendors(null))
                .collect(Collectors.toList());
    }

    public MarketDTO getMarketById(Long id) throws Exception {
        return marketToDTO(marketRepository.findById(id).orElseThrow(() ->new NoSuchMarketException()));
    }

    public void deleteAllMarkets() {
        marketRepository.deleteAll();
    }

    public void deleteMarketById(Long id) {
        marketRepository.deleteById(id);
    }

    public MarketDTO updateMarketById(Long id, MarketDTO marketDTO) {
        Market market = marketRepository.findById(id).orElse(null).builder()
                .profilePic(marketDTO.getProfilePic())
                .date(marketDTO.getDate())
                .place(marketDTO.getPlace())
                .id(id)
                .name(marketDTO.getName())
                .build();
        marketRepository.save(market);

        return marketToDTO(market);

    }

    public List<SimpleVendorDTO> findAllVendorsAtGivenMarket(Long id) throws NoSuchMarketException {
        Market market = marketRepository.findById(id).orElseThrow(() -> new NoSuchMarketException() );
        return market.getVendors().stream().map(vendorService::vendorToSimpleDTO).collect(Collectors.toList());
    }

    public Market marketDTOToEntity(MarketDTO marketDTO) {
        return Market.builder()
                .profilePic(marketDTO.getProfilePic())
                .date(marketDTO.getDate())
                .name(marketDTO.getName())
                .place(marketDTO.getPlace())
                .build();
    }

    public MarketDTO marketToDTO(Market market) {
        return new MarketDTO()
                .setProfilePic(market.getProfilePic())
                .setId(market.getId())
                .setVendors(market.getVendors().stream().map(vendorService::vendorToSimpleDTO).collect(Collectors.toSet()))
                .setDate(market.getDate())
                .setName(market.getName())
                .setPlace(market.getPlace())
                .setNumberOfVendors(market.getVendors().size());
    }

    public Market findMarketByName(String name) throws NoSuchVendorException {
        return marketRepository.findByName(name).orElseThrow(() -> new NoSuchVendorException());
    }
}


