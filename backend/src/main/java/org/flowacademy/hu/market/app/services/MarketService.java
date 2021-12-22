package org.flowacademy.hu.market.app.services;

import lombok.RequiredArgsConstructor;
import org.flowacademy.hu.market.app.entities.Vendor;
import org.flowacademy.hu.market.app.model.MarketDTO;
import org.flowacademy.hu.market.app.entities.Market;
import org.flowacademy.hu.market.app.exceptions.NoSuchMarketException;
import org.flowacademy.hu.market.app.exceptions.NoSuchVendorException;
import org.flowacademy.hu.market.app.model.SimpleMarketDTO;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.model.SimpleVendorDTO;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.flowacademy.hu.market.app.repositories.VendorRepository;
import org.flowacademy.hu.market.app.utilities.ProfilePics;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Value;

import javax.annotation.PostConstruct;
import java.text.ParseException;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MarketService {

    private final MarketRepository marketRepository;
    private final VendorRepository vendorRepository;
    private final VendorService vendorService;

    @Value("${populateWithDemoData}")
    private boolean populateWithDemoData;

    public MarketDTO addMarket(MarketDTO marketDTO) throws ParseException {
        marketRepository.save(marketDTOToEntity(marketDTO));
        return marketDTO;
    }

    public List<SimpleMarketDTO> allMarkets() {
        return marketRepository.findAll()
                .stream()
                .map(this::marketToSimpleDTO)
                .sorted(Comparator.comparing(SimpleMarketDTO::getOpeningDate))
                .collect(Collectors.toList());
    }

    public List<SimpleMarketDTO> findAllUpcomingMarkets() {
        return marketRepository.findAllUpcomingMarkets()
                .stream().map(this::marketToSimpleDTO)
                .sorted(Comparator.comparing(SimpleMarketDTO::getOpeningDate))
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
        marketRepository.findById(id).orElseThrow(NoSuchMarketException::new);
        Market market = Market.builder()
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
        Set<Vendor> vendorCollection = market.getVendors();
        if (vendorCollection == null)
            vendorCollection = new HashSet<>();
        return MarketDTO.builder()
                .profilePic(market.getProfilePic())
                .id(market.getId())
                .vendors(vendorCollection.stream().map(vendorService::vendorToSimpleDTO).collect(Collectors.toSet()))
                .openingDate(market.getOpeningDate())
                .closingDate(market.getClosingDate())
                .name(market.getName())
                .place(market.getPlace())
                .numberOfVendors(vendorCollection.size())
                .build();
    }

    public MarketDTO findMarketByName(String name) throws NoSuchVendorException {
        Market market = marketRepository.findByName(name).orElseThrow(NoSuchVendorException::new);
        return marketToDTO(market);
    }

    @PostConstruct
    @Transactional
    public void demoData() {
        if (!this.populateWithDemoData) {
            return;
        }
        try {
            if (allMarkets().size() == 0) {
                MarketInputDTO marketDTO1 = MarketInputDTO
                        .builder()
                        .profilePic(ProfilePics.PROFILE_PIC_POT)
                        .name("Bödön Piac")
                        .openingDate(1630742400L)
                        .closingDate(1630767600L)
                        .place("Szeged Pláza")
                        .build();
                addMarket(marketDTO1);

                MarketInputDTO marketDTO2 = MarketInputDTO
                        .builder()
                        .profilePic(ProfilePics.PROFILE_PIC_FOX)
                        .name("Böba Piac Karácsony")
                        .openingDate(1633323600L)
                        .closingDate(1633345200L)
                        .place("Szeged Pláza")
                        .build();
                addMarket(marketDTO2);

                MarketInputDTO marketDTO3 = MarketInputDTO.builder()
                        .profilePic(ProfilePics.PROFILE_PIC_POT)
                        .name("Bödön Piac2")
                        .openingDate(1636016400L)
                        .closingDate(1636052400L)
                        .place("Szeged Pláza").build();
                addMarket(marketDTO3);

                MarketInputDTO marketDTO4 = MarketInputDTO.builder()
                        .profilePic(ProfilePics.PROFILE_PIC_FOX)
                        .name("Böba Piac Extra")
                        .openingDate(1641279600L)
                        .closingDate(1641301200L)
                        .place("Szeged Pláza").build();
                addMarket(marketDTO4);

                MarketInputDTO marketDTO5 = MarketInputDTO.builder()
                        .profilePic(ProfilePics.PROFILE_PIC_POT)
                        .name("Bödön Piac Platinum")
                        .openingDate(1643961600L)
                        .closingDate(1643994000L)
                        .place("Szeged Pláza").build();
                addMarket(marketDTO5);

                MarketInputDTO marketDTO6 = MarketInputDTO.builder()
                        .profilePic(ProfilePics.PROFILE_PIC_FOX)
                        .name("Bödön Piac Awesome Edition")
                        .openingDate(1646380800L)
                        .closingDate(1646424000L)
                        .place("Szeged Pláza").build();
                addMarket(marketDTO6);
            }

            if (vendorService.allVendors().size() == 0) {
                VendorDTO vendorDTO1 = new VendorDTO();
                vendorDTO1.setName("Chilikirály");
                vendorDTO1.setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...");
                Set<Long> marketIdsSet1 = Set.of(1L, 2L);
                vendorDTO1.setMarketIds(marketIdsSet1);
                Set<String> newSet = Set.of("chilik", "paprikakrémek", "csípős szószok");
                vendorDTO1.setProducts(newSet);
                vendorDTO1.setEmail("chiliking@flow.hu");
                vendorDTO1.setFacebook("Chiliking-Facebook");
                vendorDTO1.setCardPayment(true);
                vendorDTO1.setPhone("+36302345678");
                vendorService.addVendor(vendorDTO1);

                VendorDTO vendorDTO2 = new VendorDTO();
                vendorDTO2.setName("Just incase");
                vendorDTO2.setIntro("Praktikus termékek, környezettudatos ajándékcsomagok....");
                Set<Long> marketIdsSet2 = Set.of(3L, 4L);
                vendorDTO1.setMarketIds(marketIdsSet2);
                Set<String> newSet2 = Set.of("lebomló zacskók", "papírdobozok", "kézműves szappanok");
                vendorDTO2.setProducts(newSet2);
                vendorDTO2.setEmail("csakugy@flow.hu");
                vendorDTO2.setFacebook("JustInCase-Facebook");
                vendorDTO2.setCardPayment(true);
                vendorDTO2.setPhone("+36308765432");
                vendorDTO2.setWebSite("www.justincase.com");
                vendorDTO2.setInstagram("justInCase.insta");
                vendorService.addVendor(vendorDTO2);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

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
        return vendor.getMarkets().stream().map(this::marketToSimpleDTO).collect(Collectors.toList());
    }

    public List<SimpleMarketDTO> findAllUpcomingMarketsByVendorId(Long id) throws NoSuchVendorException {
        Vendor vendor = vendorRepository.findById(id).orElseThrow(NoSuchVendorException::new);
        return marketRepository.findAllUpcomingMarkets()
                .stream()
                .filter(market -> market.getVendors().contains(vendor))
                .map(this::marketToSimpleDTO)
                .sorted(Comparator.comparing(SimpleMarketDTO::getOpeningDate))
                .collect(Collectors.toList());
    }

}
