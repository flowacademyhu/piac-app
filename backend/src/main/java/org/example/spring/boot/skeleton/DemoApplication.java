package org.example.spring.boot.skeleton;

import org.example.spring.boot.skeleton.controller.MarketController;
import org.example.spring.boot.skeleton.controller.VendorController;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.example.spring.boot.skeleton.model.VendorDTO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
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
		marketDTO1.setProfilePic("https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/210791482_3810484415724737_5297100901497528974_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=50OHr9toORgAX-EQihk&_nc_ht=scontent-vie1-1.xx&oh=9feb7da09adf0fabbe80030a480b3f54&oe=61985C8F");
		marketDTO1.setName("Bödön Piac");
		marketDTO1.setDate(2021102309001300L);
		marketDTO1.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO1);

		MarketDTO marketDTO2 = new MarketDTO();
		marketDTO2.setProfilePic("https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/117391980_101212148362048_3509463433295380058_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=CaFjB7a5o9EAX8KKMLc&_nc_ht=scontent-vie1-1.xx&oh=5797550ef02153f5e0f328a3d13de896&oe=6197B717");
		marketDTO2.setName("Böba Piac Karácsony");
		marketDTO2.setDate(2021122309001300L);
		marketDTO2.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO2);

		MarketDTO marketDTO3 = new MarketDTO();
		marketDTO3.setProfilePic("https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/210791482_3810484415724737_5297100901497528974_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=50OHr9toORgAX-EQihk&_nc_ht=scontent-vie1-1.xx&oh=9feb7da09adf0fabbe80030a480b3f54&oe=61985C8F");
		marketDTO3.setName("Bödön Piac");
		marketDTO3.setDate(2021112309001300L);
		marketDTO3.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO3);

		MarketDTO marketDTO4 = new MarketDTO();
		marketDTO4.setProfilePic("https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/117391980_101212148362048_3509463433295380058_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=CaFjB7a5o9EAX8KKMLc&_nc_ht=scontent-vie1-1.xx&oh=5797550ef02153f5e0f328a3d13de896&oe=6197B717");
		marketDTO4.setName("Böba Piac Extra");
		marketDTO4.setDate(2022012309001300L);
		marketDTO4.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO4);

		MarketDTO marketDTO5 = new MarketDTO();
		marketDTO5.setProfilePic("https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/210791482_3810484415724737_5297100901497528974_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=50OHr9toORgAX-EQihk&_nc_ht=scontent-vie1-1.xx&oh=9feb7da09adf0fabbe80030a480b3f54&oe=61985C8F");
		marketDTO5.setName("Bödön Piac Platinum");
		marketDTO5.setDate(2022022309001300L);
		marketDTO5.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO5);

		MarketDTO marketDTO6 = new MarketDTO();
		marketDTO6.setProfilePic("https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/210791482_3810484415724737_5297100901497528974_n.png?_nc_cat=103&ccb=1-5&_nc_sid=973b4a&_nc_ohc=50OHr9toORgAX-EQihk&_nc_ht=scontent-vie1-1.xx&oh=9feb7da09adf0fabbe80030a480b3f54&oe=61985C8F");
		marketDTO6.setName("Bödön Piac Awesome edition");
		marketDTO6.setDate(2022052309001300L);
		marketDTO6.setPlace("Szeged Pláza");
		marketController.addMarket(marketDTO6);

//		VendorDTO vendorDTO1 = new VendorDTO();
//		vendorDTO1.setName("Chilikirály");
//		vendorDTO1.setIntro("Chilizz belünk, Magyarország legjobb chilijeivel...");
//		vendorDTO1.setMarketId(2L);
//		Set<String> newSet = Set.of("chilik","paprikakrémek","csípős szószok");
//		vendorDTO1.setProducts(newSet);
//		vendorController.addVendorToMarket(vendorDTO1);
	}


}
