package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.SimpleVendorDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.example.spring.boot.skeleton.repositories.VendorRepository;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MarketService {

    private final MarketRepository marketRepository;
    private final VendorRepository vendorRepository;

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

    public MarketDTO getMarketById(Long id) {
        return marketToDTO(marketRepository.findById(id).orElseThrow());
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
                .openingDate(marketDTO.getOpeningDate())
                .closingDate(marketDTO.getClosingDate())
                .place(marketDTO.getPlace())
                .id(id)
                .name(marketDTO.getName())
                .build();
      marketRepository.save(market);
      return marketToDTO(market);

    }

    public List<SimpleVendorDTO>findAllVendorsAtGivenMarket(Long id){
       Market market = marketRepository.findById(id).orElseThrow();
       return market.getVendors().stream().map( m -> vendorToSimpleDTO(m)).collect(Collectors.toList());
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

    public MarketDTO marketToDTO(Market market){
        MarketDTO marketDTO = new MarketDTO()
                .setProfilePic(market.getProfilePic())
                .setId(market.getId())
                .setVendors(market.getVendors().stream().map( v -> vendorToResponse(v)).collect(Collectors.toSet()))
                .setOpeningDate(market.getOpeningDate())
                .setClosingDate(market.getClosingDate())
                .setName(market.getName())
                .setPlace(market.getPlace())

                .setNumberOfVendors(market.getVendors().size());
        return marketDTO;
    }

 //----------------------------------------VENDOR----------------------------------------------

    public DetailVendorDTO addVendor(VendorDTO vendorDTO){
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElse(null);
       Set<String> allProducts = vendorDTO.getProducts().stream().collect(Collectors.toSet());
        Vendor vendor = Vendor.builder()
                .intro(vendorDTO.getIntro())
                .profilePic((vendorDTO.getProfilePic()))
                .name(vendorDTO.getName())
                .cardPayment(vendorDTO.getCardPayment())
                .markets(new HashSet<>())
                .products(allProducts)
                .email(vendorDTO.getEmail())
                .facebook(vendorDTO.getFacebook())
                .instagram(vendorDTO.getInstagram())
                .webSite(vendorDTO.getWebSite())
                .phone(vendorDTO.getPhone())
                .introductionLong((vendorDTO.getIntroductionLong()))
                .build();
        vendor.getMarkets().add(market);
        vendorRepository.save(vendor);
        DetailVendorDTO detailVendorDTO = vendorToResponse(vendor);
        return detailVendorDTO;
    }

    public DetailVendorDTO vendorToResponse(Vendor vendor){
        return new DetailVendorDTO()
                .setId(vendor.getId())
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
                .setProfilePic((vendor.getProfilePic()))
                .setCardPayment(vendor.getCardPayment())
                .setProducts(vendor.getProducts())
                .setEmail(vendor.getEmail())
                .setFacebook(vendor.getFacebook())
                .setInstagram(vendor.getInstagram())
                .setPhone(vendor.getPhone())
                .setWebSite(vendor.getWebSite())
                .setIntroductionLong(vendor.getIntroductionLong());
    }

    public SimpleVendorDTO vendorToSimpleDTO(Vendor vendor){
        return new SimpleVendorDTO()
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
                .setProfilePic((vendor.getProfilePic()))
                .setId(vendor.getId());
    }

    public List<DetailVendorDTO> allVendors() {
      return vendorRepository.findAll()
              .stream()
              .map(this::vendorToResponse)
              .sorted(Comparator.comparing(DetailVendorDTO::getName,String.CASE_INSENSITIVE_ORDER))
              .collect(Collectors.toList());
    }

    public DetailVendorDTO findVendorById(Long id){
       return vendorToResponse(vendorRepository.findById(id).orElse(null));
    }

    public DetailVendorDTO updateVendor(Long id, VendorDTO vendorDTO){
           Market market = marketRepository.findById(vendorDTO.getMarketId()).orElseThrow(null);
           Vendor vendor = vendorRepository.findById(id).orElseThrow(null);
           Set<Market> set = new HashSet();
           set.add(market);
           vendor.setMarkets(set);
           vendor.setProducts(vendorDTO.getProducts());
           vendor.setIntro(vendorDTO.getIntro());
           vendor.setName(vendorDTO.getName());
           vendor.setProfilePic((vendorDTO.getProfilePic()));
           vendor.setCardPayment(vendorDTO.getCardPayment());
           vendor.setId(id);
           vendor.setFacebook(vendorDTO.getFacebook());
           vendor.setEmail(vendorDTO.getEmail());
           vendor.setPhone(vendor.getPhone());
           vendor.setInstagram(vendorDTO.getInstagram());
           vendor.setWebSite(vendorDTO.getWebSite());
           vendor.setIntroductionLong(vendorDTO.getIntroductionLong());

        vendorRepository.save(vendor);
        return vendorToResponse(vendor);

    }
}