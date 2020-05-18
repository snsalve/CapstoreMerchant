package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.entity.MerchantDetails;

@Repository
public interface MerchantRepository extends JpaRepository<MerchantDetails, Integer>{

}
