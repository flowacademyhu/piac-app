package org.example.spring.boot.skeleton.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.*;


@Entity
@Builder
public class Market {

    public Market(Long id, String name, LocalDateTime date, String place, Set<Vendor> vendors) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.place = place;
        this.vendors = vendors;
    }

    public Market() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDateTime date;
    private String place;


    @ManyToMany(mappedBy = "markets", fetch = FetchType.LAZY)
    private Set<Vendor> vendors = new HashSet<>();

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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Set<Vendor> getVendors() {
        return vendors;
    }

    public void setVendors(Set<Vendor> vendors) {
        this.vendors = vendors;
    }
}
