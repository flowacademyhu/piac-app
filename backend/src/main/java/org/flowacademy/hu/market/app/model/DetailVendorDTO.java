package org.flowacademy.hu.market.app.model;

import lombok.AllArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
public class DetailVendorDTO {

    private Long id;
    private String name;
    private String intro;
    private String profilePic;
    private Set<String> products = new HashSet<>();
    private boolean cardPayment;
    private String email;
    private String facebook;
    private String instagram;
    private String phone;
    private String webSite;
    private String introductionLong;

    public DetailVendorDTO(String name, String intro, String profilePic, boolean cardPayment) {
        this.name = name;
        this.intro = intro;
        this.profilePic = profilePic;
        this.cardPayment = cardPayment;
    }

    public DetailVendorDTO() {
    }

    public String getName() {
        return name;
    }

    public DetailVendorDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getIntro() {
        return intro;
    }

    public DetailVendorDTO setIntro(String intro) {
        this.intro = intro;
        return this;

    }

    public String getProfilePic() {
        return profilePic;
    }

    public DetailVendorDTO setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
    }

    public boolean getCardPayment() {
        return cardPayment;
    }

    public DetailVendorDTO setCardPayment(boolean cardPayment) {
        this.cardPayment = cardPayment;
        return this;
    }

    public Set<String> getProducts() {
        return products;
    }

    public DetailVendorDTO setProducts(Set<String> products) {
        this.products = products;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public DetailVendorDTO setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getFacebook() {
        return facebook;
    }

    public DetailVendorDTO setFacebook(String facebook) {
        this.facebook = facebook;
        return this;
    }

    public String getInstagram() {
        return instagram;
    }

    public DetailVendorDTO setInstagram(String instagram) {
        this.instagram = instagram;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public DetailVendorDTO setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getWebSite() {
        return webSite;
    }

    public DetailVendorDTO setWebSite(String webSite) {
        this.webSite = webSite;
        return this;
    }

    public Long getId() {
        return id;
    }

    public DetailVendorDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public boolean isCardPayment() {
        return cardPayment;
    }

    public String getIntroductionLong() {
        return introductionLong;
    }

    public DetailVendorDTO setIntroductionLong(String introductionLong) {
        this.introductionLong = introductionLong;
        return this;
    }
}
