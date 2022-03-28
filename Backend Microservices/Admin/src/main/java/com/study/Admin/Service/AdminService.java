package com.study.Admin.Service;

//import com.deals.coupon.Exception.ECommerceException;

import com.study.Admin.Model.Admin;
import com.study.Admin.Model.Coupon;

import java.util.List;

public interface AdminService {


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



    List<Admin> getcoupon();

    Admin addCoupon(Admin coupon);

    Admin updateCoupon(Admin coupon);


//    void deleteCoupon(Integer id);



    void deleteCoupon(Integer id);

//    List<Coupon> Coupon();

//    String setCoupon(Coupon coupon);
}
