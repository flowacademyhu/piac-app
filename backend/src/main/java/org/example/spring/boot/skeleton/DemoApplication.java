package org.example.spring.boot.skeleton;

import org.example.spring.boot.skeleton.controller.MarketController;
import org.example.spring.boot.skeleton.controller.VendorController;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.util.Set;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private final MarketController marketController;
	private final VendorController vendorController;

	public DemoApplication(MarketController marketController, VendorController vendorController) {
		this.marketController = marketController;
		this.vendorController = vendorController;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Override
	public void run(String... args) {
		MarketDTO marketDTO1 = new MarketDTO();
		marketDTO1.setName("Bödön Piac");
		marketDTO1.setDate(LocalDateTime.of(2021,10,23,11,00,00));
		marketDTO1.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO1);

		MarketDTO marketDTO2 = new MarketDTO();
		marketDTO2.setName("Bödön Piac Karácsony");
		marketDTO2.setDate(LocalDateTime.of(2021,12,23,10,00,00));
		marketDTO2.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO2);

//		VendorDTO vendorDTO1 = new VendorDTO();
//		vendorDTO1.setName("Chilikirály");
//		vendorDTO1.setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...");
//		vendorDTO1.setMarketId(2L);
//		Set<String> newSet = Set.of("chilik","paprikakrémek","csípős szószok");
//		vendorDTO1.setProducts(newSet);
//		vendorController.addVendorToMarket(vendorDTO1);
	}


}
