package org.example.spring.boot.skeleton.model;

import java.util.HashSet;
import java.util.Set;

public class VendorResponse {

    private String name;
    private String intro;
    private Set<String> products = new HashSet<>();

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

    public Set<String> getProducts() {
        return products;
    }

    public VendorResponse setProducts(Set<String> products) {
        this.products = products;
        return this;
    }
}
