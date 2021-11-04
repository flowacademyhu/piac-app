package org.flowacademy.hu.market.app.services;

import lombok.AllArgsConstructor;
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


import javax.annotation.PostConstruct;
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

    public List<MarketDTO> allMarkets(){
        return  marketRepository.findAll()
                .stream()
                .map(this::marketToDTO)
                .sorted(Comparator.comparing(MarketDTO::getOpeningDate))
                .peek( m -> m.setVendors(null))
                .collect(Collectors.toList());
    }

    public List<MarketDTO> findAllUpcomingMarkets() {
        return marketRepository.findAllUpcomingMarkets()
                .stream().map(this::marketToDTO)
                .sorted(Comparator.comparing(MarketDTO::getOpeningDate))
                .peek(m -> m.setVendors(null))
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
        Set<Vendor> collect = market.getVendors();
        if(collect == null) collect = new HashSet<>();

        return new MarketDTO()
                .setProfilePic(market.getProfilePic())
                .setId(market.getId())
                .setVendors(collect.stream().map(vendorService::vendorToSimpleDTO).collect(Collectors.toSet()))
                .setOpeningDate(market.getOpeningDate())
                .setClosingDate(market.getClosingDate())
                .setName(market.getName())
                .setPlace(market.getPlace())
                .setNumberOfVendors(collect.size());
    }


    public MarketDTO findMarketByName(String name) throws NoSuchVendorException {
       Market market = marketRepository.findByName(name).orElseThrow(NoSuchVendorException::new);
        return marketToDTO(market);
    }

    @PostConstruct
    @Transactional
    public void demoData() {
        try {
            if(allMarkets().size() == 0) {
                MarketDTO marketDTO1 = new MarketDTO();
                marketDTO1.setProfilePic(ProfilePics.PROFILE_PIC_POT);
                marketDTO1.setName("Bödön Piac");
                marketDTO1.setOpeningDate(1634972400L);
                marketDTO1.setClosingDate(1634986800L);
                marketDTO1.setPlace("Szeged Pláza");
                addMarket(marketDTO1);

                MarketDTO marketDTO2 = new MarketDTO();
                marketDTO2.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
                marketDTO2.setName("Böba Piac Karácsony");
                marketDTO2.setOpeningDate(1634972400L);
                marketDTO2.setClosingDate(1634986800L);
                marketDTO2.setPlace("Szeged Pláza");
                addMarket(marketDTO2);

                MarketDTO marketDTO3 = new MarketDTO();
                marketDTO3.setProfilePic(ProfilePics.PROFILE_PIC_POT);
                marketDTO3.setName("Bödön Piac2");
                marketDTO3.setOpeningDate(1634972400L);
                marketDTO3.setClosingDate(1634986800L);
                marketDTO3.setPlace("Szeged Pláza");
                addMarket(marketDTO3);

                MarketDTO marketDTO4 = new MarketDTO();
                marketDTO4.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
                marketDTO4.setName("Böba Piac Extra");
                marketDTO4.setOpeningDate(1634972400L);
                marketDTO4.setClosingDate(1634986800L);
                marketDTO4.setPlace("Szeged Pláza");
                addMarket(marketDTO4);

                MarketDTO marketDTO5 = new MarketDTO();
                marketDTO5.setProfilePic(ProfilePics.PROFILE_PIC_POT);
                marketDTO5.setName("Bödön Piac Platinum");
                marketDTO5.setOpeningDate(1634972400L);
                marketDTO5.setClosingDate(1634986800L);
                marketDTO5.setPlace("Szeged Pláza");
                addMarket(marketDTO5);

                MarketDTO marketDTO6 = new MarketDTO();
                marketDTO6.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
                marketDTO6.setName("Bödön Piac Awesome Edition");
                marketDTO6.setOpeningDate(1634972400L);
                marketDTO6.setClosingDate(1634986800L);
                marketDTO6.setPlace("Szeged Pláza");
                addMarket(marketDTO6);
            }

            if(vendorService.allVendors().size() == 0) {
                VendorDTO vendorDTO1 = new VendorDTO();
                vendorDTO1.setName("Chilikirály");
                vendorDTO1.setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...");
                MarketDTO market = findMarketByName("Bödön Piac");
                vendorDTO1.setMarketId(market.getId());
                Set<String> newSet = Set.of("chilik","paprikakrémek","csípős szószok");
                vendorDTO1.setProducts(newSet);
                vendorDTO1.setEmail("chiliking@flow.hu");
                vendorDTO1.setFacebook("Chiliking-Facebook");
                vendorDTO1.setCardPayment(true);
                vendorDTO1.setPhone("+36302345678");
                vendorService.addVendor(vendorDTO1);

                VendorDTO vendorDTO2 = new VendorDTO();
                vendorDTO2.setName("Just incase");
                vendorDTO2.setIntro("Praktikus termékek, környezettudatos ajándékcsomagok....");
                MarketDTO market2 = findMarketByName("Bödön Piac");
                vendorDTO2.setMarketId(market.getId());
                Set<String> newSet2 = Set.of("lebomló zacskók","papírdobozok","kézműves szappanok");
                vendorDTO2.setProducts(newSet2);
                vendorDTO2.setEmail("csakugy@flow.hu");
                vendorDTO2.setFacebook("JustInCase-Facebook");
                vendorDTO2.setCardPayment(true);
                vendorDTO2.setPhone("+36308765432");
                vendorDTO2.setWebSite("www.justincase.com");
                vendorDTO2.setInstagram("justInCase.insta");
                vendorService.addVendor(vendorDTO2);
            }
        } catch(Exception e) {
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
        return vendor.getMarkets().stream().map(market -> marketToSimpleDTO(market)).collect(Collectors.toList());
    }

}
