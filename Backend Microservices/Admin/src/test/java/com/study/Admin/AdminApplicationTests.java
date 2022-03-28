package com.study.Admin;

import com.study.Admin.Model.Admin;
import com.study.Admin.Repository.AdminRepository;
import com.study.Admin.Service.AdminService;
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

@SpringBootTest
@RunWith(SpringRunner.class)
class AdminApplicationTests {


	@Autowired
	private AdminService adminService;
	@MockBean
	private AdminRepository adminRepository;

	@Test
	public void getUsersTest() {
		when(adminRepository.findAll()).thenReturn(Stream.of(new Admin(234,"ram",30.5,30.5)).collect(Collectors.toList()));
		assertEquals(1,adminService.getcoupon().size());

	}

	@Test
	public void addCouponTest(){
		Admin det=new Admin(2,"bhanu",23.2,34.5);
		when(adminRepository.save(det)).thenReturn(det);
		assertEquals(det,adminService.addCoupon(det));
	}

	@Test
	public void update() {
		Admin updateCoupon =  new Admin(23,"manager",12.3,12.3);

		adminService.updateCoupon(updateCoupon);
		verify(adminRepository,times(1)).save(updateCoupon);
	}

	@Test
	public void delete() {
		Integer userID = 23;
		adminService.deleteCoupon(userID);
		verify(adminRepository,times(1)).deleteById(userID);
	}


}
