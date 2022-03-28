package com.study.Admin.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Coupon {


    private int id;
    private String code;
    private double percentage;
    private double maxLimit;

}
