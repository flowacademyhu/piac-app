package org.example.spring.boot.skeleton.entities;

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

    @ManyToMany(mappedBy = "markets", fetch = FetchType.LAZY)
    private Set<Vendor> vendors = new HashSet<>();


    public Market(Long id, String profilePic, String name, Long openingDate, Long closingDate, String place, Set<Vendor> vendors) {
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

    public void setId(Long id) {
        this.id = id;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(Long date) {
        this.openingDate = date;
    }

    public Long getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(Long closingDate) {
        this.closingDate = closingDate;
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
