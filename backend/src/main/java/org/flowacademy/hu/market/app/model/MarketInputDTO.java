package org.flowacademy.hu.market.app.model;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Builder
@Getter
@Setter
public class MarketInputDTO {

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

    @Builder.Default
    private Set<Long> vendors = new HashSet<>();
}
