package com.coupon.customerservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "CUSTOMER_DETAILS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    private String id;
    private String firstname;
    private String lastname;
    private String emailId;
    private double dob;
    private String userId;
    private String password;
    private long phoneNumber;
    private String address;

}
