package org.flowacademy.hu.market.app.repositories;

import java.util.TimeZone;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.flowacademy.hu.market.app.entities.Market;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.transaction.annotation.Transactional;
import static org.assertj.core.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace=Replace.NONE)
@Transactional
class MarketRepositoryTest {

  @Autowired
  private MarketRepository marketRepository;

  private TimeZone budapestTimeZone = TimeZone.getTimeZone("Europe/Budapest");

  Market buildMarketWithTime(String name, long timeOffsetSeconds) {
    Market market = new Market();
    market.setName(name);
    market.setClosingDate(System.currentTimeMillis() / 1000 + timeOffsetSeconds);

    return market;
  }

  long getMidnightOffset() {
    var oneDay = 24 * 60 * 60;
    var timeZoneOffset = this.budapestTimeZone.getOffset(System.currentTimeMillis()) / 1000;
    var utcMidnight = (System.currentTimeMillis() / 1000) / oneDay * oneDay;
    var localMidnight = utcMidnight - timeZoneOffset;
    var now = (System.currentTimeMillis() / 1000);
    return localMidnight - now;
  }

  @BeforeEach
  void setUp() {
    marketRepository.deleteAll();
  }

  @Test
  void marketRepositoryIsLoaded() {
    assertThat(marketRepository).isNotNull();
  }

  @Test
  void canSaveAndGetMarket(){
    Market newMarket = new Market();
    newMarket.setName("Bödön Piac");
    newMarket.setOpeningDate(1630742400L);
    newMarket.setClosingDate(1630767600L);
    newMarket.setProfilePic("https://example.com/images/bodon.png");
    newMarket.setPlace("Valamilyen pláza");
    
    var savedMarket = marketRepository.save(newMarket);

    var marketList = marketRepository.findAll();
    assertThat(marketList).hasSize(1);
    var market = marketList.get(0);
    assertThat(market.getId()).isEqualTo(savedMarket.getId());
    assertThat(market.getName()).isEqualTo("Bödön Piac");
    assertThat(market.getOpeningDate()).isEqualTo(1630742400L);
    assertThat(market.getClosingDate()).isEqualTo(1630767600L);
    assertThat(market.getProfilePic()).isEqualTo("https://example.com/images/bodon.png");
    assertThat(market.getPlace()).isEqualTo("Valamilyen pláza");
  }

  @Test
  void getUpcomingMarkets() {
    // yesterday
    marketRepository.save(buildMarketWithTime("Yesterday", -24 * 60 * 60));
    marketRepository.save(buildMarketWithTime("Before midnight in Budapest timezone", getMidnightOffset() - 60)); // 1 minute before midnight
    // today
    marketRepository.save(buildMarketWithTime("After midnight in Budapest timezone", getMidnightOffset() + 60)); // 1 minute after midnight
    marketRepository.save(buildMarketWithTime("Today elapsed", -60)); // 1 minutes elapsed
    marketRepository.save(buildMarketWithTime("Tomorrow", 24 * 60 * 60));

    // TODO temporary debug logs because this test is undeterministic, it's failing sometimes
    var allMarketList = marketRepository.findAll();

    System.out.println("Markets in the DB right now: ");

    for (Market market : allMarketList) {
      System.out.println(market.getName());
      System.out.println(market.getClosingDate());
    }

    var marketList = marketRepository.findAllUpcomingMarkets();

    assertThat(marketList).hasSize(3);
  }
}