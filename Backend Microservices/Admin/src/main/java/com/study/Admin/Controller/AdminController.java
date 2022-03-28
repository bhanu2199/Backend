package com.study.Admin.Controller;
import com.study.Admin.Model.Admin;
import com.study.Admin.Model.Coupon;
import com.study.Admin.Repository.AdminRepository;
import com.study.Admin.Service.AdminService;
import io.micrometer.core.util.internal.logging.InternalLoggerFactory;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
    @RequestMapping("/admin")
@Slf4j
@OpenAPIDefinition
@CrossOrigin
    public class AdminController {

    final Logger logger= LoggerFactory.getLogger(AdminController.class);

      @Autowired
      private AdminService adminService;
@Autowired
        private AdminRepository adminRepository;
@Autowired
    RestTemplate restTemplate;

    @PostMapping("/addadmin")
    public Admin addCoupon(@RequestBody Admin coupon) {
        logger.info("This is  for post");
        return adminService.addCoupon(coupon);
    }

    @PutMapping("/updateadmin")
    public ResponseEntity<?> updateC(@RequestBody Admin coupon) {
        Admin updateEntity = this.adminService.updateCoupon(coupon);
        logger.info("This is  for update");
        return ResponseEntity.ok(updateEntity);
    }

    @DeleteMapping("/del/{id}")
    public int deleteC(@PathVariable Integer id) {
        adminService.deleteCoupon(id);
        logger.info("This is  for delete");
        return (id);


    }

    @GetMapping("/getadmin")
    public List<Admin> findAllCoupon() {
        logger.info("This is  for get");
        return adminService.getcoupon();
    }



@GetMapping("/getcoupon")
public List<Coupon> findCoupon() {

    return Arrays.asList(restTemplate.getForObject("http://coupon-Service/coupon/getcoupon", Coupon[].class));
}

    @PostMapping(value = "/add")
    public  String addCoupon(@RequestBody Coupon coupon){
        return  restTemplate.postForObject("http://coupon-Service/coupon/add",coupon,String.class);
    }

    @DeleteMapping(value = "/deleteCoupon/{id}")
    public String deletecoupon(@PathVariable Integer id) {
        restTemplate.delete("http://coupon-service/coupon/del/{id}", id, String.class);
        return "Coupon with Id = "+id+" Deleted Successfully";
    }
    @PutMapping(value = "/update")
    public String updatecoupon(@RequestBody Coupon coupon){
        restTemplate.put("http://coupon-service/coupon/update",coupon,String.class);
        return "coupon Updated Succesfully";
    }
}
