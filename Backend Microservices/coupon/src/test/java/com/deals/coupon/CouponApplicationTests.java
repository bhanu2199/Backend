package com.deals.coupon;

import com.deals.coupon.Model.Coupon;
import com.deals.coupon.Repository.CouponRepository;
import com.deals.coupon.Service.CouponService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@RunWith(SpringRunner.class)
@SpringBootTest
class CouponApplicationTests {


	@Autowired
	private CouponService couponService;
	@MockBean
	private CouponRepository couponRepository;

	@Test
	public void getUsersTest() {
		when(couponRepository.findAll()).thenReturn(Stream.of(new Coupon(234,"ram",30.5,30.5)).collect(Collectors.toList()));
		assertEquals(1,couponService.getcoupon().size());

	}

	@Test
	public void addCouponTest(){
		Coupon det=new Coupon(2,"bhanu",23.2,34.5);
		when(couponRepository.save(det)).thenReturn(det);
		assertEquals(det,couponService.addCoupon(det));
	}

	@Test
	public void update() {
		Coupon updateCoupon =  new Coupon(23,"manager",12.3,12.3);

		couponService.updateCoupon(updateCoupon);
		verify(couponRepository,times(1)).save(updateCoupon);
	}

	@Test
	public void delete() {
		Integer userID = 23;
		couponService.deleteCoupon(userID);
		verify(couponRepository,times(1)).deleteById(userID);
	}










}
