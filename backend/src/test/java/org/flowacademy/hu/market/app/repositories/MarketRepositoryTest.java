package org.flowacademy.hu.market.app.repositories;

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
}