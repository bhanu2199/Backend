package com.coupon.customerservice.Service;

import com.coupon.customerservice.Model.Customer;
import com.coupon.customerservice.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImp implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public Customer save(Customer customer) {
        return this.customerRepository.save(customer);
    }

    @Override
    public void deleteById(String id) {
        this.customerRepository.deleteById(id);

    }

    @Override
    public List<Customer> getcustomer() {
        List<Customer> customer = customerRepository.findAll();
        System.out.println("Getting data from DB : " + customer);
        return customer;
    }
}
