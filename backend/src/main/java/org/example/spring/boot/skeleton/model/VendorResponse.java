package org.example.spring.boot.skeleton.model;


public class VendorResponse {


    private String name;
    private String intro;

    public VendorResponse(String name, String intro) {
        this.name = name;
        this.intro = intro;
    }

    public VendorResponse() {
    }

    public String getName() {
        return name;
    }

    public VendorResponse setName(String name) {
        this.name = name;
        return this;
    }

    public String getIntro() {
        return intro;
    }

    public VendorResponse setIntro(String intro) {
        this.intro = intro;
        return this;
    }
}
