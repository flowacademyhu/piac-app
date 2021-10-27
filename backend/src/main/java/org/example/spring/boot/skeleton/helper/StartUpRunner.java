package org.example.spring.boot.skeleton.helper;

import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.example.spring.boot.skeleton.services.VendorService;
import org.example.spring.boot.skeleton.utilities.ProfilePics;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class StartUpRunner implements CommandLineRunner {

    private final MarketService marketService;
    private final VendorService vendorService;

    public StartUpRunner(MarketService marketService, VendorService vendorService) {
        this.marketService = marketService;
        this.vendorService = vendorService;
    }
    @Override
    public void run(String... args) throws Exception {
        MarketDTO marketDTO1 = new MarketDTO();
        marketDTO1.setProfilePic(ProfilePics.PROFILE_PIC_POT);
        marketDTO1.setName("Bödön Piac");
        marketDTO1.setDate(2021102309001300L);
        marketDTO1.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO1);

        MarketDTO marketDTO2 = new MarketDTO();
        marketDTO2.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
        marketDTO2.setName("Böba Piac Karácsony");
        marketDTO2.setDate(2021122309001300L);
        marketDTO2.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO2);

        MarketDTO marketDTO3 = new MarketDTO();
        marketDTO3.setProfilePic(ProfilePics.PROFILE_PIC_POT);
        marketDTO3.setName("Bödön Piac2");
        marketDTO3.setDate(2021112309001300L);
        marketDTO3.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO3);

        MarketDTO marketDTO4 = new MarketDTO();
        marketDTO4.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
        marketDTO4.setName("Böba Piac Extra");
        marketDTO4.setDate(2022012309001300L);
        marketDTO4.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO4);

        MarketDTO marketDTO5 = new MarketDTO();
        marketDTO5.setProfilePic(ProfilePics.PROFILE_PIC_POT);
        marketDTO5.setName("Bödön Piac Platinum");
        marketDTO5.setDate(2022022309001300L);
        marketDTO5.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO5);

        MarketDTO marketDTO6 = new MarketDTO();
        marketDTO6.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
        marketDTO6.setName("Bödön Piac Awesome Edition");
        marketDTO6.setDate(2022052309001300L);
        marketDTO6.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO6);

        VendorDTO vendorDTO1 = new VendorDTO();
        vendorDTO1.setName("Chilikirály");
        vendorDTO1.setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...");
        var foundMarket = marketService.findMarketByName("Bödön Piac Platinum");
        vendorDTO1.setMarketId(foundMarket.getId());
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
        var foundMarket2 = marketService.findMarketByName("Bödön Piac Awesome Edition");
        vendorDTO2.setMarketId(foundMarket2.getId());
        Set<String> newSet2 = Set.of("lebomló zacskók","papírdobozok","kézműves szappanok");
        vendorDTO2.setProducts(newSet2);
        vendorDTO2.setEmail("csakugy@flow.hu");
        vendorDTO2.setFacebook("JustInCase-Facebook");
        vendorDTO2.setCardPayment(true);
        vendorDTO2.setPhone("+36308765432");
        vendorService.addVendor(vendorDTO2);
    }
}
