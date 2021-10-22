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
                .profilePic(marketDTO.getProfilePic())
                .date(marketDTO.getDate())
                .place(marketDTO.getPlace())
                .id(id)
                .name(marketDTO.getName())
                .build();
        return marketRepository.save(market);
    }

    public Market marketDTOToEntity(MarketDTO marketDTO){
        return Market.builder()
                .profilePic(marketDTO.getProfilePic())
                .date(marketDTO.getDate())
                .startAndEndHour(marketDTO.getStartAndEndHour())
                .name(marketDTO.getName())
                .place(marketDTO.getPlace())
                .build();
    }

    public MarketDTO marketToDTO(Market market){
        MarketDTO marketDTO = new MarketDTO()
                .setProfilePic(market.getProfilePic())
                .setVendors(market.getVendors())
                .setDate(market.getDate())
                .setStartAndEndHour(market.getStartAndEndHour())
                .setName(market.getName())
                .setPlace(market.getPlace())
                .setNumberOfVendors(market.getVendors().size());
        return marketDTO;
    }

 //----------------------------------------VENDOR----------------------------------------------

    public VendorResponse addVendor(VendorDTO vendorDTO){
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElse(null);
       Set<String> allProducts = new HashSet<>();
        vendorDTO.getProducts().stream().map( p -> allProducts.add(p));
        Vendor vendor = Vendor.builder()
                .intro(vendorDTO.getIntro())
                .name(vendorDTO.getName())
                .markets(new HashSet<>())
                .products(allProducts)
                .build();
        vendor.getMarkets().add(market);
        vendorRepository.save(vendor);
        VendorResponse vendorResponse = vendorToResponse(vendor);
        return vendorResponse;
    }


    public VendorResponse vendorToResponse(Vendor vendor){
        return new VendorResponse()
                .setIntro(vendor.getIntro())
                .setName(vendor.getName());
    }

    public List<VendorResponse> allVendors() {
      return vendorRepository.findAll()
              .stream()
              .map( v -> vendorToResponse(v))
              .sorted(Comparator.comparing(VendorResponse::getName))
              .collect(Collectors.toList());
    }

    public Vendor findVendorById(Long id){
       return vendorRepository.findById(id).orElse(null);
    }

    public Vendor updateVendor(Long id, VendorDTO vendorDTO){
           Market market = marketRepository.findById(vendorDTO.getMarketId()).orElseThrow(null);
           Vendor vendor = vendorRepository.findById(id).orElseThrow(null);
           Set<Market> set = new HashSet();
           set.add(market);
           vendor.setMarkets(set);
           vendor.setProducts(vendorDTO.getProducts());
           vendor.setIntro(vendorDTO.getIntro());
           vendor.setName(vendorDTO.getName());
           vendor.setId(id);
       return vendorRepository.save(vendor);

    }
}