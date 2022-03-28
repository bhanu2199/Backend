package com.deals.coupon.Service;

import com.deals.coupon.Model.Coupon;
import com.deals.coupon.Repository.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CouponServiceImpl implements CouponService{


    @Autowired
    private CouponRepository couponRepository;

//    @Override
//    public void save(Coupon coupon) {
//
//    }
//
//    @Override
//    public void deleteById(long id) {
//
//    }

    @Override
    public List<Coupon> getcoupon() {
        List<Coupon> coupon = couponRepository.findAll();
        System.out.println("Getting data from DB : " + coupon);
        return coupon;
    }

    @Override
    public Coupon addCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    @Override
    public Coupon updateCoupon(Coupon coupon) {
        return this.couponRepository.save(coupon);
    }

    @Override
    public void deleteCoupon(Integer id) {
        this.couponRepository.deleteById(id);
        return ;
    }


}
