package org.example.spring.boot.skeleton.entities;

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
    @Column(length = 1000)
    private String introductionLong;

    @ElementCollection(targetClass = String.class)
    private Set<String> products = new HashSet<>();

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinTable(name = "vendors_markets",
            joinColumns = {@JoinColumn(name = "vendor_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "market_id", referencedColumnName = "id")})
    private Set<Market> markets = new HashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
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

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public boolean getCardPayment() {
        return cardPayment;
    }

    public void setCardPayment(boolean cardPayment) {
        this.cardPayment = cardPayment;
    }

    public Set<String> getProducts() {
        return products;
    }

    public void setProducts(Set<String> products) {
        this.products = products;
    }

    public String getIntroductionLong() {
        return introductionLong;
    }

    public void setIntroductionLong(String introductionLong) {
        this.introductionLong = introductionLong;
    }

    @JsonIgnore
    @ManyToMany(mappedBy = "market")
    public Set<Market> getMarkets() {
        return markets;
    }

    public void setMarkets(Set<Market> markets) {
        this.markets = markets;
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
