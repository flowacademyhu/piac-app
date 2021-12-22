package org.flowacademy.hu.market.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;
    private String profilePic;
    private String intro;
    private boolean cardPayment;
    private String email;
    private String facebook;
    private String instagram;
    private String phone;
    private String webSite;
    @Column(length = 2500)
    private String introductionLong;

    @ElementCollection(targetClass = String.class)
    @Builder.Default
    private Set<String> products = new HashSet<>();

    @ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
    @JoinTable(name = "vendors_markets", joinColumns = {
            @JoinColumn(name = "vendor_id", referencedColumnName = "id") }, inverseJoinColumns = {
                    @JoinColumn(name = "market_id", referencedColumnName = "id") })
    @Builder.Default
    private Set<Market> markets = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Vendor vendor = (Vendor) o;
        return Objects.equals(id, vendor.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Vendor() {
    }

    public Long getId() {
        return id;
    }

    public Vendor setId(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Vendor setName(String name) {
        this.name = name;
        return this;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public Vendor setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
    }

    public String getIntro() {
        return intro;
    }

    public Vendor setIntro(String intro) {
        this.intro = intro;
        return this;
    }

    public boolean getCardPayment() {
        return cardPayment;
    }

    public Vendor setCardPayment(boolean cardPayment) {
        this.cardPayment = cardPayment;
        return this;
    }

    public Set<String> getProducts() {
        return products;
    }

    public Vendor setProducts(Set<String> products) {
        this.products = products;
        return this;
    }

    public String getIntroductionLong() {
        return introductionLong;
    }

    public Vendor setIntroductionLong(String introductionLong) {
        this.introductionLong = introductionLong;
        return this;
    }

    @JsonIgnore
    @ManyToMany(mappedBy = "market")
    public Set<Market> getMarkets() {
        return markets;
    }

    public Vendor setMarkets(Set<Market> markets) {
        this.markets = markets;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Vendor setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getFacebook() {
        return facebook;
    }

    public Vendor setFacebook(String facebook) {
        this.facebook = facebook;
        return this;
    }

    public String getInstagram() {
        return instagram;
    }

    public Vendor setInstagram(String instagram) {
        this.instagram = instagram;
        return this;
    }

    public String getPhone() {
        return phone;
    }

    public Vendor setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public String getWebSite() {
        return webSite;
    }

    public Vendor setWebSite(String webSite) {
        this.webSite = webSite;
        return this;
    }
}
