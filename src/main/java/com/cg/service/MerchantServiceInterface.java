package com.cg.service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.cg.entity.Product;

@Service
public interface MerchantServiceInterface {
	public boolean addProduct(Product product);
	public Set<Product> viewProducts(int merchantId);
	public Product getProduct(int productId);
}
