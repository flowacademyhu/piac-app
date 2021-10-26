package org.example.spring.boot.skeleton;

import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.services.MarketService;
import org.example.spring.boot.skeleton.utilities.ProfilePics;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private final MarketService marketService;

	public DemoApplication(MarketService marketService) {
		this.marketService = marketService;
	}


	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Override
	public void run(String... args) {
		MarketDTO marketDTO1 = new MarketDTO();
		marketDTO1.setProfilePic(ProfilePics.PROFILE_PIC_1);
		marketDTO1.setName("Bödön Piac");
		marketDTO1.setDate(2021102309001300L);
		marketDTO1.setPlace("Szeged Pláza");
		marketService.addMarket(marketDTO1);

		MarketDTO marketDTO2 = new MarketDTO();
		marketDTO2.setProfilePic(ProfilePics.PROFILE_PIC_2);
		marketDTO2.setName("Böba Piac Karácsony");
		marketDTO2.setDate(2021122309001300L);
		marketDTO2.setPlace("Szeged Pláza");
		marketService.addMarket(marketDTO2);

		MarketDTO marketDTO3 = new MarketDTO();
		marketDTO3.setProfilePic(ProfilePics.PROFILE_PIC_3);
		marketDTO3.setName("Bödön Piac2");
		marketDTO3.setDate(2021112309001300L);
		marketDTO3.setPlace("Szeged Pláza");
		marketService.addMarket(marketDTO3);

		MarketDTO marketDTO4 = new MarketDTO();
		marketDTO4.setProfilePic(ProfilePics.PROFILE_PIC_4);
		marketDTO4.setName("Böba Piac Extra");
		marketDTO4.setDate(2022012309001300L);
		marketDTO4.setPlace("Szeged Pláza");
		marketService.addMarket(marketDTO4);

		MarketDTO marketDTO5 = new MarketDTO();
		marketDTO5.setProfilePic(ProfilePics.PROFILE_PIC_5);
		marketDTO5.setName("Bödön Piac Platinum");
		marketDTO5.setDate(2022022309001300L);
		marketDTO5.setPlace("Szeged Pláza");
		marketService.addMarket(marketDTO5);

		MarketDTO marketDTO6 = new MarketDTO();
		marketDTO6.setProfilePic(ProfilePics.PROFILE_PIC_6);
		marketDTO6.setName("Bödön Piac Awesome edition");
		marketDTO6.setDate(2022052309001300L);
		marketDTO6.setPlace("Szeged Pláza");
		marketService.addMarket(marketDTO6);

//		VendorDTO vendorDTO1 = new VendorDTO();
//		vendorDTO1.setName("Chilikirály");
//		vendorDTO1.setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...");
//		vendorDTO1.setMarketId(2L);
//		Set<String> newSet = Set.of("chilik","paprikakrémek","csípős szószok");
//		vendorDTO1.setProducts(newSet);
//		vendorController.addVendorToMarket(vendorDTO1);
	}


}
