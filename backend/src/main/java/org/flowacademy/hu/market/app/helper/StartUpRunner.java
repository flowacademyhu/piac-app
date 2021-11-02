package org.flowacademy.hu.market.app.helper;

import org.flowacademy.hu.market.app.model.MarketDTO;
import org.flowacademy.hu.market.app.model.VendorDTO;
import org.flowacademy.hu.market.app.services.MarketService;
import org.flowacademy.hu.market.app.services.VendorService;
import org.flowacademy.hu.market.app.utilities.ProfilePics;
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
        marketDTO1.setOpeningDate(1634972400L);
        marketDTO1.setClosingDate(1634986800L);
        marketDTO1.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO1);

        MarketDTO marketDTO2 = new MarketDTO();
        marketDTO2.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
        marketDTO2.setName("Böba Piac Karácsony");
        marketDTO2.setOpeningDate(1634972400L);
        marketDTO2.setClosingDate(1634986800L);
        marketDTO2.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO2);

        MarketDTO marketDTO3 = new MarketDTO();
        marketDTO3.setProfilePic(ProfilePics.PROFILE_PIC_POT);
        marketDTO3.setName("Bödön Piac2");
        marketDTO3.setOpeningDate(1634972400L);
        marketDTO3.setClosingDate(1634986800L);
        marketDTO3.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO3);

        MarketDTO marketDTO4 = new MarketDTO();
        marketDTO4.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
        marketDTO4.setName("Böba Piac Extra");
        marketDTO4.setOpeningDate(1634972400L);
        marketDTO4.setClosingDate(1634986800L);
        marketDTO4.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO4);

        MarketDTO marketDTO5 = new MarketDTO();
        marketDTO5.setProfilePic(ProfilePics.PROFILE_PIC_POT);
        marketDTO5.setName("Bödön Piac Platinum");
        marketDTO5.setOpeningDate(1634972400L);
        marketDTO5.setClosingDate(1634986800L);
        marketDTO5.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO5);

        MarketDTO marketDTO6 = new MarketDTO();
        marketDTO6.setProfilePic(ProfilePics.PROFILE_PIC_FOX);
        marketDTO6.setName("Bödön Piac Awesome Edition");
        marketDTO6.setOpeningDate(1634972400L);
        marketDTO6.setClosingDate(1634986800L);
        marketDTO6.setPlace("Szeged Pláza");
        marketService.addMarket(marketDTO6);

        VendorDTO vendorDTO1 = new VendorDTO();
        vendorDTO1.setName("Chilikirály")
        .setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...")
        .setMarketId(2L)
       .setProducts(Set.of("chilik","paprikakrémek","csípős szószok"))
        .setEmail("chiliking@flow.hu")
        .setFacebook("Chiliking-Facebook")
        .setCardPayment(true)
        .setPhone("+36302345678");
        vendorService.addVendor(vendorDTO1);

        VendorDTO vendorDTO2 = new VendorDTO();
        vendorDTO2.setProfilePic("pic");
        vendorDTO2.setName("Just In Case");
        vendorDTO2.setIntro("Praktikus termékek, környezettudatos ajándékcsomagok....");
        vendorDTO2.setMarketId(3L);
        vendorDTO2.setProducts(Set.of("lebomló zacskók","papírdobozok","kézműves szappanok"));
        vendorDTO2.setEmail("csakugy@flow.hu");
        vendorDTO2.setFacebook("JustInCase-Facebook");
        vendorDTO2.setCardPayment(true);
        vendorDTO2.setPhone("+36308765432");
        vendorDTO2.setIntroductionLong("long");
        vendorService.addVendor(vendorDTO2);
    }
}
