package org.example.spring.boot.skeleton.model;


public class SimpleVendorDTO {

    private Long id;
    private String intro;
    private String name;
    private String profilePic;

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
}
