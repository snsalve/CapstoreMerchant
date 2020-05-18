package com.cg.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.dao.MerchantDaoInterface;
import com.cg.entity.Product;

@Service
public class MerchantServiceImpl implements MerchantServiceInterface{

	@Autowired
	MerchantDaoInterface merchantDao;
	
	@Override
	public boolean addProduct(Product product) {
		return merchantDao.addProduct(product);
		
	}

	@Override
	public Set<Product> viewProducts(int merchantId) {
		return merchantDao.viewProducts(merchantId);
		
	}

	@Override
	public Product getProduct(int productId) {
		return merchantDao.getProduct(productId);
	}

}
