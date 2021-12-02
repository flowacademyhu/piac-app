package org.flowacademy.hu.market.app.repositories;

import java.util.TimeZone;
import org.flowacademy.hu.market.app.repositories.MarketRepository;
import org.flowacademy.hu.market.app.entities.Market;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import static org.assertj.core.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace=Replace.NONE)
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

  @Test
  void marketRepositoryIsLoaded() {
    assertThat(marketRepository).isNotNull();
  }

  @Test
  void versionTest(){
    Market market = new Market();
    market.setName("Bödön Piac");
    marketRepository.save(market);

    var marketList = marketRepository.findAll();

    assertThat(marketList).hasSize(1);
    assertThat(marketList.get(0).getName()).isEqualTo("Bödön Piac");
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

    var marketList = marketRepository.findAllUpcomingMarkets();

    assertThat(marketList).hasSize(3);
  }
}