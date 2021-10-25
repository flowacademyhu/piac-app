package org.example.spring.boot.skeleton.model;

import java.util.HashSet;
import java.util.Set;

public class VendorResponse {

    private String name;
    private String intro;
    private Set<String> products = new HashSet<>();
    private boolean cardPayment;
    private String email;
    private String facebook;
    private String instagram;
    private String phone;
    private String webSite;

    public VendorResponse(String name, String intro, boolean cardPayment) {
        this.name = name;
        this.intro = intro;
        this.cardPayment = cardPayment;
    }

    public VendorResponse() {
    }

    public String getName() {
        return name;
    }

    public VendorResponse setName(String name) {
        this.name = name;
        return this;
    }

    public String getIntro() {
        return intro;
    }

    public VendorResponse setIntro(String intro) {
        this.intro = intro;
        return this;
    }

    public boolean getCardPayment() {
        return cardPayment;
    }

    public VendorResponse setCardPayment(boolean cardPayment) {
        this.cardPayment = cardPayment;
        return this;
    }

    public Set<String> getProducts() {
        return products;
    }

    public VendorResponse setProducts(Set<String> products) {
        this.products = products;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public VendorResponse setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getFacebook() {
        return facebook;
    }

    public VendorResponse setFacebook(String facebook) {
        this.facebook = facebook;
        return this;
    }

    public String getInstagram() {
        return instagram;
    }

    public VendorResponse setInstagram(String instagram) {
        this.instagram = instagram;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public VendorResponse setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getWebSite() {
        return webSite;
    }

    public VendorResponse setWebSite(String webSite) {
        this.webSite = webSite;
        return this;
    }
}
