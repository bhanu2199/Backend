package com.coupon.customerservice.Controller;

import com.coupon.customerservice.Model.Coupon;
import com.coupon.customerservice.Model.Customer;
import com.coupon.customerservice.Repository.CustomerRepository;
import com.coupon.customerservice.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("cus")
public class customerController {

    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CustomerService customerService;
    @Autowired
    RestTemplate restTemplate;


    @PostMapping("/addcustomer")
    public ResponseEntity<String> store(@RequestBody Customer customer) {
        customerRepository.save(customer);
        return new ResponseEntity<String>("object is inserted", HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCustomer(@RequestBody Customer customer) {
        Customer updateEntity = this.customerService.save(customer);
        return ResponseEntity.ok(updateEntity);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable String id) {
        this.customerService.deleteById(id);
        return id;
    }

//    @GetMapping("/get")
//    public ResponseEntity<?> getCustomer() {
//
//        return ResponseEntity.ok(this.customerRepository.findAll());
//    }

    @GetMapping("/getcustomer")
    public List<Customer> findAllCustomer() {
        return customerService.getcustomer();
    }

//----------------------------------Coupon-----------------------------------------------------------


    @GetMapping("/getcoupon")
    public List<Coupon> findAllCoupon() {

        return Arrays.asList(restTemplate.getForObject("http://coupon-Service/coupon/getcoupon", Coupon[].class));
    }




}

