package org.example.spring.boot.skeleton.model;

import javax.validation.constraints.NotNull;
import java.util.*;


public class MarketDTO {

    private Long id;

    @NotNull
    private String profilePic;

    @NotNull
    private String name;

    @NotNull
    private String place;

    @NotNull
    private String date;

    @NotNull
    private String startAndEndHour;

    private int numberOfVendors;


    private Set<VendorResponse> vendors;

    public Set<VendorResponse> getVendors() {
        return vendors;
    }

    public MarketDTO setVendors(Set<VendorResponse> vendors) {
        this.vendors = vendors;
        return this;
    }

    public MarketDTO() {
    }

    public String getProfilePic() {
        return profilePic;
    }

    public MarketDTO setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
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

    public String getDate() {
        return date;
    }

    public MarketDTO setDate(String date) {
        this.date = date;
        return this;
    }

    public String getStartAndEndHour() {
        return startAndEndHour;
    }

    public MarketDTO setStartAndEndHour(String startAndEndHour) {
        this.startAndEndHour = startAndEndHour;
        return this;
    }

    public int getNumberOfVendors() {
        return numberOfVendors;
    }

    public MarketDTO setNumberOfVendors(int numberOfVendors) {
        this.numberOfVendors = numberOfVendors;
        return this;
    }

    public Long getId() {
        return id;
    }

    public MarketDTO setId(Long id) {
        this.id = id;
        return this;
    }
}
