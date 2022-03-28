package com.study.Admin.Service;


import com.study.Admin.Model.Admin;
import com.study.Admin.Model.Coupon;
import com.study.Admin.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {


    @Autowired
    private AdminRepository adminRepository;;
//@Autowired
//    RestTemplate restTemplate;
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
    public List<Admin> getcoupon() {
        List<Admin> coupon = adminRepository.findAll();
        System.out.println("Getting data from DB : " + coupon);
        return coupon;
    }

    @Override
    public Admin addCoupon(Admin coupon) {
        return adminRepository.save(coupon);
    }

    @Override
    public Admin updateCoupon(Admin coupon) {
        return this.adminRepository.save(coupon);
    }

    @Override
    public void deleteCoupon(Integer id) {
        this.adminRepository.deleteById(id);
        return ;
    }

//    @Override
//    public List<Coupon> Coupon() {
//        List coupon = restTemplate.getForObject("http://coupon-Service/coupon/getcoupon", List.class);
//   return coupon; }
//
//    @Override
//    public String setCoupon( @RequestBody Coupon coupon) {
//        return restTemplate.postForObject("http://coupon-Service/coupon/add", List.class);
//         }
    }



