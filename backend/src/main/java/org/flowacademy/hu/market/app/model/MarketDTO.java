package org.flowacademy.hu.market.app.model;

import java.util.Set;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
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
}
