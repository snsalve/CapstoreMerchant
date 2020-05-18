package com.cg.dao;

import java.util.Set;

import com.cg.entity.Product;

public interface MerchantDaoInterface {
	public boolean addProduct(Product product);
	public Set<Product> viewProducts(int merchantId);
	public Product getProduct(int productId);

}
