package org.example.spring.boot.skeleton.services;

import lombok.AllArgsConstructor;
import org.example.spring.boot.skeleton.entities.Market;
import org.example.spring.boot.skeleton.entities.Vendor;
import org.example.spring.boot.skeleton.exceptions.NoSuchMarketException;
import org.example.spring.boot.skeleton.exceptions.NoSuchVendorException;
import org.example.spring.boot.skeleton.model.DetailVendorDTO;
import org.example.spring.boot.skeleton.model.SimpleVendorDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.repositories.MarketRepository;
import org.example.spring.boot.skeleton.repositories.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VendorService {

    private final MarketRepository marketRepository;
    private final VendorRepository vendorRepository;

    public DetailVendorDTO addVendor(VendorDTO vendorDTO) throws Exception {
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElseThrow(() -> new NoSuchMarketException());
        Set<String> allProducts = new HashSet<>(vendorDTO.getProducts());
        Vendor vendor = Vendor.builder()
                .intro(vendorDTO.getIntro())
                .name(vendorDTO.getName())
                .cardPayment(vendorDTO.getCardPayment())
                .markets(new HashSet<>())
                .products(allProducts)
                .email(vendorDTO.getEmail())
                .facebook(vendorDTO.getFacebook())
                .instagram(vendorDTO.getInstagram())
                .webSite(vendorDTO.getWebSite())
                .phone(vendorDTO.getPhone())
                .build();
        vendor.getMarkets().add(market);
        vendorRepository.save(vendor);
        return vendorToResponse(vendor);
    }

    public DetailVendorDTO vendorToResponse(Vendor vendor){
        return new DetailVendorDTO()
                .setId(vendor.getId())
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
                .setCardPayment(vendor.getCardPayment())
                .setProducts(vendor.getProducts())
                .setEmail(vendor.getEmail())
                .setFacebook(vendor.getFacebook())
                .setInstagram(vendor.getInstagram())
                .setPhone(vendor.getPhone())
                .setWebSite(vendor.getWebSite());
    }

    public SimpleVendorDTO vendorToSimpleDTO(Vendor vendor){
        return new SimpleVendorDTO()
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
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

    public DetailVendorDTO updateVendor(Long id, VendorDTO vendorDTO) throws Exception {
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElseThrow(() -> new NoSuchMarketException());
        Vendor vendor = vendorRepository.findById(id).orElseThrow(() -> new NoSuchVendorException());
            Set<Market> set = new HashSet();
            set.add(market);
            vendor.setMarkets(set);
            vendor.setProducts(vendorDTO.getProducts());
            vendor.setIntro(vendorDTO.getIntro());
            vendor.setName(vendorDTO.getName());
            vendor.setCardPayment(vendorDTO.getCardPayment());
            vendor.setId(id);
            vendor.setFacebook(vendorDTO.getFacebook());
            vendor.setEmail(vendorDTO.getEmail());
            vendor.setPhone(vendor.getPhone());
            vendor.setInstagram(vendorDTO.getInstagram());
            vendor.setWebSite(vendorDTO.getWebSite());
            vendorRepository.save(vendor);
        return vendorToResponse(vendor);

    }

    public void deleteAllVendors(){
        vendorRepository.deleteAll();
    }

    public void deleteVendorById(Long id){
        vendorRepository.deleteById(id);
    }
}


