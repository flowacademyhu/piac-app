package org.flowacademy.hu.market.app.services;

import lombok.AllArgsConstructor;
import org.flowacademy.hu.market.app.entities.Market;
import org.flowacademy.hu.market.app.entities.Vendor;
import org.flowacademy.hu.market.app.exceptions.NoSuchMarketException;
import org.flowacademy.hu.market.app.exceptions.NoSuchVendorException;
import org.flowacademy.hu.market.app.model.DetailVendorDTO;
import org.flowacademy.hu.market.app.model.SimpleVendorDTO;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.flowacademy.hu.market.app.repositories.VendorRepository;
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
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElseThrow(NoSuchMarketException::new);
        Set<String> allProducts = new HashSet<>(vendorDTO.getProducts());
        Vendor vendor = Vendor.builder()
                .intro(vendorDTO.getIntro())
                .name(vendorDTO.getName())
                .profilePic(vendorDTO.getProfilePic())
                .cardPayment(vendorDTO.getCardPayment())
                .markets(new HashSet<>())
                .products(allProducts)
                .profilePic(vendorDTO.getProfilePic())
                .email(vendorDTO.getEmail())
                .facebook(vendorDTO.getFacebook())
                .instagram(vendorDTO.getInstagram())
                .webSite(vendorDTO.getWebSite())
                .phone(vendorDTO.getPhone())
                .introductionLong(vendorDTO.getIntroductionLong())
                .build();
        vendor.getMarkets().add(market);
        vendorRepository.save(vendor);
        return vendorToResponse(vendor);
    }

    public DetailVendorDTO vendorToResponse(Vendor vendor) {
        return new DetailVendorDTO()
                .setId(vendor.getId())
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
                .setProfilePic(vendor.getProfilePic())
                .setCardPayment(vendor.getCardPayment())
                .setProducts(vendor.getProducts())
                .setEmail(vendor.getEmail())
                .setFacebook(vendor.getFacebook())
                .setInstagram(vendor.getInstagram())
                .setPhone(vendor.getPhone())
                .setWebSite(vendor.getWebSite())
                .setIntroductionLong(vendor.getIntroductionLong());

    }

    public SimpleVendorDTO vendorToSimpleDTO(Vendor vendor) {
        return new SimpleVendorDTO()
                .setIntro(vendor.getIntro())
                .setName(vendor.getName())
                .setProfilePic(vendor.getProfilePic())
                .setId(vendor.getId());
    }

    public List<DetailVendorDTO> allVendors() {
        return vendorRepository.findAll()
                .stream()
                .map(this::vendorToResponse)
                .sorted(Comparator.comparing(DetailVendorDTO::getName, String.CASE_INSENSITIVE_ORDER))
                .collect(Collectors.toList());
    }

    public DetailVendorDTO findVendorById(Long id) throws NoSuchVendorException {
        return vendorToResponse(vendorRepository.findById(id).orElseThrow(NoSuchVendorException::new));
    }

    public DetailVendorDTO updateVendor(Long id, VendorDTO vendorDTO) throws Exception {
        Market market = marketRepository.findById(vendorDTO.getMarketId()).orElseThrow(NoSuchMarketException::new);
        Vendor vendor = vendorRepository.findById(id).orElseThrow(NoSuchVendorException::new);
        Set<Market> markets = new HashSet();
        markets.add(market);
        vendor.setPhone(vendorDTO.getPhone())
                .setWebSite(vendorDTO.getWebSite())
                .setInstagram(vendorDTO.getInstagram())
                .setFacebook(vendorDTO.getFacebook())
                .setEmail(vendorDTO.getEmail())
                .setProfilePic(vendorDTO.getProfilePic())
                .setProducts(vendorDTO.getProducts())
                .setName(vendorDTO.getName())
                .setIntro(vendorDTO.getIntro())
                .setIntroductionLong(vendor.getIntroductionLong())
                .setId(id)
                .setMarkets(markets);
        vendorRepository.save(vendor);
        return vendorToResponse(vendor);
    }

    public void deleteAllVendors() {
        vendorRepository.deleteAll();
    }

    public void deleteVendorById(Long id) {
        vendorRepository.deleteById(id);
    }
}


