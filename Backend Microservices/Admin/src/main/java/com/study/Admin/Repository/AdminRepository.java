package com.study.Admin.Repository;


import com.study.Admin.Model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepository extends MongoRepository<Admin,Integer> {
}
