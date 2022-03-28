package com.deals.coupon.Controller;



import com.deals.coupon.Model.Coupon;

import com.deals.coupon.Repository.CouponRepository;
import com.deals.coupon.Service.CouponService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@OpenAPIDefinition
@RestController
@Slf4j
    @RequestMapping("/coupon")
@CrossOrigin
    public class CouponController {
    final Logger logger= LoggerFactory.getLogger(CouponController.class);
      @Autowired
      private CouponService couponService;
@Autowired
        private CouponRepository couponRepository;



    @PostMapping("/add")
    public Coupon addCoupon(@RequestBody Coupon coupon) {
        logger.info("This is  for post");
        return couponService.addCoupon(coupon);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateCoupon(@RequestBody Coupon coupon) {
        Coupon updateEntity = this.couponService.updateCoupon(coupon);
        logger.info("This is  for update");
        return ResponseEntity.ok(updateEntity);
    }

    @DeleteMapping("/d/{id}")
    public int deleteCoupon(@PathVariable Integer id) {
        couponService.deleteCoupon(id);
        logger.info("This is  for delete");
        return (id);


    }
    @GetMapping("/getcoupon")
    public List<Coupon> findAllCoupon() {

        logger.info("This is  for get");return couponService.getcoupon();
    }


}
