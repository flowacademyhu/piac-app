package org.example.spring.boot.skeleton.model;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;


public class VendorDTO {

    @NotNull
    private String name;

    @NotNull
    private String intro;

   @NotNull
    private Long marketId;

   private Set<String> products = new HashSet<>();

    public Set<String> getProducts() {
        return products;
    }

    public VendorDTO setProducts(Set<String> products) {
        this.products = products;
        return this;
    }

    public VendorDTO(String name, String intro, Long marketId) {
        this.name = name;
        this.intro = intro;
        this.marketId = marketId;
    }

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
}
