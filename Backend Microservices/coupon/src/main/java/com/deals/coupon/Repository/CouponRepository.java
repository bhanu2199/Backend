package com.deals.coupon.Repository;

import com.deals.coupon.Model.Coupon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CouponRepository extends MongoRepository<Coupon,Integer> {
}
