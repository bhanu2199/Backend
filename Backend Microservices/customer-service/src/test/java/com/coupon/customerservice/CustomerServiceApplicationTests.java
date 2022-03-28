package com.coupon.customerservice;

import com.coupon.customerservice.Model.Customer;
import com.coupon.customerservice.Repository.CustomerRepository;
import com.coupon.customerservice.Service.CustomerService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
@RunWith(SpringRunner.class)
@SpringBootTest
class CustomerServiceApplicationTests {

	@Autowired
	private CustomerService customerService;
	@MockBean
	private CustomerRepository customerRepository;
	@Test
	public void getUsersTest() {
		when(customerRepository.findAll()).thenReturn(Stream.of(new Customer("errt32","bhanu","jkhjkh","ab",12.5,"bcd","efg",12456L,"teacher")).collect(Collectors.toList()));
		assertEquals(2,customerService.getcustomer().size());

	}

}
