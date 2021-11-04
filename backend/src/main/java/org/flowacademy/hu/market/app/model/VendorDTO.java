package org.flowacademy.hu.market.app.model;

import lombok.AllArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
public class VendorDTO {

    @NotNull
    private String name;

    @NotNull
    private String profilePic;

    @NotNull
    @Size(min = 1, max=100)
    private String intro;
    @NotNull
    private boolean cardPayment;
    @NotNull
    private Long marketId;


   private Set<String> products = new HashSet<>();
   private String email;
   private String facebook;
   private String instagram;
   private String phone;
   private String webSite;

   @NotNull
   @Size(min = 1, max = 2500)
   private String introductionLong;

    public Set<String> getProducts() {
        return products;
    }

    public VendorDTO setProducts(Set<String> products) {
        this.products = products;
        return this;
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

    public String getProfilePic() {
        return profilePic;
    }

    public VendorDTO setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
    }

    public String getIntro() {
        return intro;
    }

    public VendorDTO setIntro(String intro) {
        this.intro = intro;
        return this;
    }

    public boolean getCardPayment() {
        return cardPayment;
    }

    public VendorDTO setCardPayment(boolean cardPayment) {
        this.cardPayment = cardPayment;
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

    public String getIntroductionLong() {
        return introductionLong;
    }

    public VendorDTO setIntroductionLong(String introductionLong) {
        this.introductionLong = introductionLong;
        return this;
    }
}
