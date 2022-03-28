package com.deals.coupon.Service;

//import com.deals.coupon.Exception.ECommerceException;
import com.deals.coupon.Model.Coupon;

import java.util.List;

public interface CouponService {


//
//    public long addCoupon(Coupon coupon) throws ECommerceException;
//
//    public Coupon getCouponByCode(String couponCode) throws ECommerceException;
//
//    public List<Coupon> getCoupons();
//
//    public void updateCoupon(Coupon coupon) throws ECommerceException;
//
//    public void deleteCouponById(long couponId);
//
//    void save(Coupon coupon);
//
//    void deleteById(long id);



    List<Coupon> getcoupon();

    Coupon addCoupon(Coupon coupon);

    Coupon updateCoupon(Coupon coupon);


//    void deleteCoupon(Integer id);



    void deleteCoupon(Integer id);
}
