package org.example.spring.boot.skeleton.entities;

import lombok.Builder;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;



@Entity
@Builder
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String profilePic;

    private String name;
    private String date;
    private String startAndEndHour;
    private String place;

    @ManyToMany(mappedBy = "markets", fetch = FetchType.LAZY)
    private Set<Vendor> vendors = new HashSet<>();


    public Market(Long id, String profilePic, String name, String date, String startAndEndHour, String place, Set<Vendor> vendors) {
        this.id = id;
        this.profilePic = profilePic;
        this.name = name;
        this.date = date;
        this.startAndEndHour = startAndEndHour;
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

    public String getStartAndEndHour() {
        return startAndEndHour;
    }

    public void setStartAndEndHour(String startAndEndHour) {
        this.startAndEndHour = startAndEndHour;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
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
