package org.example.spring.boot.skeleton.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


public class MarketDTO {

    public MarketDTO() {
    }

    @NotNull
    private String name;

    @NotNull
    private String place;

    @NotNull
    private LocalDateTime date;

    private int numberOfVendors;

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
