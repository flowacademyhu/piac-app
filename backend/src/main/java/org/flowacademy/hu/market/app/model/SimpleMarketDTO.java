package org.flowacademy.hu.market.app.model;

import lombok.Builder;

@Builder
public class SimpleMarketDTO {
    private Long id;
    private String profilePic;
    private String name;
    private String place;
    private Long openingDate;
    private Long closingDate;
    private int numberOfVendors;

    public SimpleMarketDTO() {
    }

    public SimpleMarketDTO(Long id, String profilePic, String name, String place, Long openingDate, Long closingDate, int numberOfVendors) {
        this.id = id;
        this.profilePic = profilePic;
        this.name = name;
        this.place = place;
        this.openingDate = openingDate;
        this.closingDate = closingDate;
        this.numberOfVendors = numberOfVendors;
    }

    public Long getId() {
        return id;
    }

    public SimpleMarketDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public SimpleMarketDTO setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
    }

    public String getName() {
        return name;
    }

    public SimpleMarketDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getPlace() {
        return place;
    }

    public SimpleMarketDTO setPlace(String place) {
        this.place = place;
        return this;
    }

    public Long getOpeningDate() {
        return openingDate;
    }

    public SimpleMarketDTO setOpeningDate(Long openingDate) {
        this.openingDate = openingDate;
        return this;
    }

    public Long getClosingDate() {
        return closingDate;
    }

    public SimpleMarketDTO setClosingDate(Long closingDate) {
        this.closingDate = closingDate;
        return this;
    }

    public int getNumberOfVendors() {
        return numberOfVendors;
    }

    public SimpleMarketDTO setNumberOfVendors(int numberOfVendors) {
        this.numberOfVendors = numberOfVendors;
        return this;
    }
}
