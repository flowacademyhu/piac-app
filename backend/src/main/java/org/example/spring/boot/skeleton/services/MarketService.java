package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.exceptions.NoSuchVendorException;
import org.example.spring.boot.skeleton.model.SimpleMarketDTO;
import org.example.spring.boot.skeleton.model.SimpleVendorDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.example.spring.boot.skeleton.repositories.VendorRepository;
import org.springframework.stereotype.Service;

import java.text.ParseException;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MarketService {

    private final MarketRepository marketRepository;
    private final VendorRepository vendorRepository;
    private final VendorService vendorService;

    public MarketDTO addMarket(MarketDTO marketDTO) throws ParseException {
        marketRepository.save(marketDTOToEntity(marketDTO));
        return marketDTO;
    }

    public List<MarketDTO> allMarkets() {
        return marketRepository.findAll()
                .stream()
                .map(this::marketToDTO)
                .sorted(Comparator.comparing(MarketDTO::getOpeningDate).reversed())
                .peek(m -> m.setVendors(null))
                .sorted(Comparator.comparing(MarketDTO::getOpeningDate).reversed())
                .peek( m -> m.setVendors(null))

                .collect(Collectors.toList());
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

    public SimpleMarketDTO marketToSimpleDTO(Market market) {
        return SimpleMarketDTO.builder()
                .id(market.getId())
                .profilePic(market.getProfilePic())
                .name(market.getName())
                .place(market.getPlace())
                .openingDate(market.getOpeningDate())
                .closingDate(market.getClosingDate())
                .numberOfVendors(market.getVendors().size())
                .build();
    }

    public List<SimpleMarketDTO> findAllMarketsByVendorId(Long id) throws NoSuchVendorException {
        Vendor vendor = vendorRepository.findById(id).orElseThrow(NoSuchVendorException::new);
        return vendor.getMarkets().stream().map(market -> marketToSimpleDTO(market)).collect(Collectors.toList());
    }

}
