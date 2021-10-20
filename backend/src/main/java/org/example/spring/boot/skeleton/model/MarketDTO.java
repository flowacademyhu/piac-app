package org.example.spring.boot.skeleton.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class MarketDTO {

    @NotNull
    private String name;

    @NotNull
    private String place;

    @NotNull
    private LocalDateTime date;



}
