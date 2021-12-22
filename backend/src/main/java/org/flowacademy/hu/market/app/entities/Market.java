package org.flowacademy.hu.market.app.entities;

import lombok.Builder;
import javax.persistence.*;
import java.util.*;

@Entity
@Builder
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String profilePic;
    private String name;

    private Long openingDate;
    private Long closingDate;
    private String place;

    @ManyToMany(mappedBy = "markets", fetch = FetchType.EAGER)
    @Builder.Default
    private Set<Vendor> vendors = new HashSet<>();

    public Market(Long id, String profilePic, String name, Long openingDate, Long closingDate, String place,
            Set<Vendor> vendors) {
        this.id = id;
        this.profilePic = profilePic;
        this.name = name;
        this.openingDate = openingDate;
        this.closingDate = closingDate;
        this.place = place;
        this.vendors = vendors;
    }

    public Market() {
    }

    public Long getId() {
        return id;
    }

    public Market setId(Long id) {
        this.id = id;
        return this;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public Market setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
    }

    public String getName() {
        return name;
    }

    public Market setName(String name) {
        this.name = name;
        return this;
    }

    public Long getOpeningDate() {
        return openingDate;
    }

    public Market setOpeningDate(Long date) {
        this.openingDate = date;
        return this;
    }

    public Long getClosingDate() {
        return closingDate;
    }

    public Market setClosingDate(Long closingDate) {
        this.closingDate = closingDate;
        return this;
    }

    public String getPlace() {
        return place;
    }

    public Market setPlace(String place) {
        this.place = place;
        return this;
    }

    public Set<Vendor> getVendors() {
        return vendors;
    }

    public void setVendors(Set<Vendor> vendors) {
        this.vendors = vendors;
    }
}