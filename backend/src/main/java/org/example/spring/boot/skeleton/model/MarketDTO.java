package org.example.spring.boot.skeleton.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.example.spring.boot.skeleton.entities.Vendor;

import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.*;


public class MarketDTO {

    @NotNull
    private String name;

    @NotNull
    private String place;

    @NotNull
    private LocalDateTime date;

    private int numberOfVendors;


    private Set<Vendor> vendors;

    public Set<Vendor> getVendors() {
        return vendors;
    }

    public MarketDTO setVendors(Set<Vendor> vendors) {
        this.vendors = vendors;
        return this;
    }

    public MarketDTO() {
    }

    public String getName() {
        return name;
    }

    public MarketDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getPlace() {
        return place;
    }

    public MarketDTO setPlace(String place) {
        this.place = place;
        return this;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public MarketDTO setDate(LocalDateTime date) {
        this.date = date;
        return this;
    }

    public int getNumberOfVendors() {
        return numberOfVendors;
    }

    public MarketDTO setNumberOfVendors(int numberOfVendors) {
        this.numberOfVendors = numberOfVendors;
        return this;
    }
}
