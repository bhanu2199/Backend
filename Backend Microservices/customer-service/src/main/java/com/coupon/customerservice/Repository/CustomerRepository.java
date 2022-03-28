package com.coupon.customerservice.Repository;

import com.coupon.customerservice.Model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer,String> {
}
