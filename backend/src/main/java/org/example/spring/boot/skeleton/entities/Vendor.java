package org.example.spring.boot.skeleton.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;

import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Entity
@Builder
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String intro;

    @ElementCollection(targetClass = String.class)
    private Set<String> products = new HashSet<>();

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinTable(name = "vendors_markets",
            joinColumns = {@JoinColumn(name = "vendor_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "market_id", referencedColumnName = "id")})
    private Set<Market> markets = new HashSet<>();

    public Vendor(Long id, String name, String intro, Set<String> products, Set<Market> markets) {
        this.id = id;
        this.name = name;
        this.intro = intro;
        this.products = products;
        this.markets = markets;
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

    @JsonIgnore
    @ManyToMany(mappedBy = "market")
    public Set<Market> getMarkets() {
        return markets;
    }

    public void setMarkets(Set<Market> markets) {
        this.markets = markets;
    }

}
