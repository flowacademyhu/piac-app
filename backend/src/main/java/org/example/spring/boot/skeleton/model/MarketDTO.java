package org.example.spring.boot.skeleton.model;

import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
    private Long openingDate;

    @NotNull
    private Long closingDate;

    private int numberOfVendors;

    private Set<SimpleVendorDTO> vendors;

    public Set<SimpleVendorDTO> getVendors() {
        return vendors;
    }

    public MarketDTO setVendors(Set<SimpleVendorDTO> vendors) {
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

    public Long getOpeningDate() {
        return openingDate;
    }

    public MarketDTO setOpeningDate(Long openingDate) {
        this.openingDate = openingDate;
        return this;
    }

    public Long getClosingDate() {
        return closingDate;
    }

    public MarketDTO setClosingDate(Long closingDate) {
        this.closingDate = closingDate;
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
