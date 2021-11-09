package org.flowacademy.hu.market.app.model;

import java.util.HashSet;
import java.util.Set;

public class SimpleVendorDTO {

    private Long id;
    private String intro;
    private String name;
    private String profilePic;
    private Set<String> products = new HashSet<>();
    private String introductionLong;

    public SimpleVendorDTO(String intro, String name, String profilePic) {
        this.intro = intro;
        this.name = name;
        this.profilePic = profilePic;
    }

    public Long getId() {
        return id;
    }

    public SimpleVendorDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public SimpleVendorDTO() {
    }

    public String getIntro() {
        return intro;
    }

    public SimpleVendorDTO setIntro(String intro) {
        this.intro = intro;
        return this;
    }

    public String getName() {
        return name;
    }

    public SimpleVendorDTO setName(String name) {
        this.name = name;
        return this;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public SimpleVendorDTO setProfilePic(String profilePic) {
        this.profilePic = profilePic;
        return this;
    }

    public Set<String> getProducts() {
        return products;
    }

    public SimpleVendorDTO setProducts(Set<String> products) {
        this.products = products;
        return this;
    }

    public String getIntroductionLong() {
        return introductionLong;
    }

    public SimpleVendorDTO setIntroductionLong(String introductionLong) {
        this.introductionLong = introductionLong;
        return this;
    }
}
