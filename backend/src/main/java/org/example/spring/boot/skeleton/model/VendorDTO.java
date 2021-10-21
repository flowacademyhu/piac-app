package org.example.spring.boot.skeleton.model;

import javax.validation.constraints.NotNull;



public class VendorDTO {

    @NotNull
    private String name;

    @NotNull
    private String intro;

   @NotNull
    private Long marketId;

  /*   private MarketDTO marketDTO;

    public MarketDTO getMarketDTO() {
        return marketDTO;
    }

    public VendorDTO setMarketDTO(MarketDTO marketDTO) {
        this.marketDTO = marketDTO;
        return this;
    }  */

    public VendorDTO() {
    }

    public String getName() {
        return name;
    }

    public VendorDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getIntro() {
        return intro;
    }

    public VendorDTO setIntro(String intro) {
        this.intro = intro;
        return this;
    }

   public Long getMarketId() {
        return marketId;
    }

    public VendorDTO setMarketId(Long marketId) {
        this.marketId = marketId;
        return this;
    }

    @Override
    public String toString() {
        return "VendorDTO{" +
                "name='" + name + '\'' +
                ", intro='" + intro + '\'' +

                '}';
    }

// private List<String> products;
}
