package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
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

    public Market addMarket(MarketDTO marketDTO){
        return marketRepository.save(marketDTOToEntity(marketDTO));
    }

    public List<MarketDTO> allMarkets(){
       return  marketRepository.findAll()
                .stream()
                 .map(this::marketToDTO)
                .sorted(Comparator.comparing(MarketDTO::getDate))
                .collect(Collectors.toList());

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
        Market market = getMarketById(id).builder()
                .date(marketDTO.getDate())
                .place(marketDTO.getPlace())
                .id(id)
                .name(marketDTO.getName())
                .build();
        return marketRepository.save(market);
    }

 //----------------------------------------VENDOR----------------------------------------------

    public VendorDTO addVendor(VendorDTO vendorDTO){
       Market market = marketRepository.findById(vendorDTO.getMarketId()).orElse(null);
        Vendor vendor = Vendor.builder().intro(vendorDTO.getIntro()).name(vendorDTO.getName()).markets(new HashSet<>()).build();
        VendorDTO newVendorDTO = vendorToDTO(vendor, marketToDTO(market));

        market.getVendors().add(vendor);
        vendorRepository.save(vendor);
        return newVendorDTO;
    }

    public Market marketDTOToEntity(MarketDTO marketDTO){
        return Market.builder()
                .date(marketDTO.getDate())
                .name(marketDTO.getName())
                .place(marketDTO.getPlace())
                .build();
    }

    public MarketDTO marketToDTO(Market market){
       return new MarketDTO()
                .setDate(market.getDate())
                .setName(market.getName())
                .setPlace(market.getPlace())
                .setNumberOfVendors(market.getVendors().size());

    }

    public VendorDTO vendorToDTO (Vendor vendor, MarketDTO marketDTO){
        return new VendorDTO()
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
                .setMarketDTO(marketDTO);
    }




}