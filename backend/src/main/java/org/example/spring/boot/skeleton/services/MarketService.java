package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.model.VendorResponse;
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

    public VendorResponse addVendor(VendorDTO vendorDTO){
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElse(null);
        Vendor vendor = Vendor.builder().intro(vendorDTO.getIntro()).name(vendorDTO.getName()).build();

        market.getVendors().add(vendor);
        vendorRepository.save(vendor);
        marketRepository.save(market);
        VendorResponse vendorResponse = vendorToResponse(vendor);
        return vendorResponse;
    }

    public Market marketDTOToEntity(MarketDTO marketDTO){
        return Market.builder()
                .date(marketDTO.getDate())
                .name(marketDTO.getName())
                .place(marketDTO.getPlace())
                .build();
    }

    public MarketDTO marketToDTO(Market market){
         MarketDTO marketDTO = new MarketDTO()
                .setVendors(market.getVendors())
                .setDate(market.getDate())
                .setName(market.getName())
                .setPlace(market.getPlace())
                .setNumberOfVendors(market.getVendors().size());

        System.out.println("Getvendors:" + market);
        return marketDTO;
    }

    public VendorResponse vendorToResponse(Vendor vendor){
        return new VendorResponse()
                .setIntro(vendor.getIntro())
                .setName(vendor.getName().toUpperCase(Locale.ROOT));
    }


    public List<VendorResponse> allVendors() {
      return vendorRepository.findAll()
              .stream()
              .map( v -> vendorToResponse(v))
              .sorted(Comparator.comparing(VendorResponse::getName))
              .collect(Collectors.toList());
    }
}