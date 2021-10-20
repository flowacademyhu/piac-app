package org.example.spring.boot.skeleton.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.spring.boot.skeleton.model.MarketDTO;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Builder
public class Vendor {
    public Vendor(Long id, String name, String intro, Set<String> products, Set<Market> markets) {
        this.id = id;
        this.name = name;
        this.intro = intro;
        this.products = products;
        this.markets = markets;
    }

    public Vendor() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String intro;


    @Transient
    private Set<String> products = new HashSet<>();


    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "vendors_markets",
       joinColumns = {@JoinColumn(name = "vendor_id")},
       inverseJoinColumns = {@JoinColumn(name = "market_id")})
    private Set<Market> markets = new HashSet<>();


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

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public Set<String> getProducts() {
        return products;
    }

    public void setProducts(Set<String> products) {
        this.products = products;
    }

    public Set<Market> getMarkets() {
        return markets;
    }

    public void setMarkets(Set<Market> markets) {
        this.markets = markets;
    }
}
