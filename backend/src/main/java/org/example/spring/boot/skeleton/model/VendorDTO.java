package org.example.spring.boot.skeleton.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;


public class VendorDTO {

    @NotNull
    private String name;

    @NotNull
    @Size(max=1000)
    private String intro;

   @NotNull
    private Long marketId;

   private Set<String> products = new HashSet<>();

   private String email;
   private String facebook;
   private String instagram;
   private String phone;
   private String webSite;


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

    public String getEmail() {
        return email;
    }

    public VendorDTO setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getFacebook() {
        return facebook;
    }

    public VendorDTO setFacebook(String facebook) {
        this.facebook = facebook;
        return this;
    }

    public String getInstagram() {
        return instagram;
    }

    public VendorDTO setInstagram(String instagram) {
        this.instagram = instagram;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public VendorDTO setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getWebSite() {
        return webSite;
    }

    public VendorDTO setWebSite(String webSite) {
        this.webSite = webSite;
        return this;
    }
}
