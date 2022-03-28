package com.coupon.customerservice.Service;

import com.coupon.customerservice.Model.Customer;
import com.coupon.customerservice.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

public interface CustomerService  {



    Customer save(Customer customer);

    void deleteById(String id);

    List<Customer> getcustomer();
}
