package org.example.spring.boot.skeleton.model;


public class SimpleVendorDTO {

    private String intro;
    private String name;

    public SimpleVendorDTO(String intro, String name) {
        this.intro = intro;
        this.name = name;
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
}
