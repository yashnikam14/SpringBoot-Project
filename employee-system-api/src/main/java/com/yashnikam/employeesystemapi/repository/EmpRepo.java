package com.yashnikam.employeesystemapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yashnikam.employeesystemapi.entity.EmpEntity;

@Repository
public interface EmpRepo extends JpaRepository<EmpEntity, Long> {
    
}
