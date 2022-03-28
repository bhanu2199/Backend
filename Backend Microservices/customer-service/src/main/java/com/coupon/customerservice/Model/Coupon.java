package com.coupon.customerservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;




    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class Coupon {

        @Id
        private long id;
        private String code;
        private double percentage;
        private double maxLimit;

    }



