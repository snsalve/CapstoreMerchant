package com.cg.dao;

import java.util.List;
import java.util.Set;

import com.cg.entity.MerchantDetails;
import com.cg.entity.Product;

public interface MerchantDaoInterface {
	public boolean addProduct(Product product, int merchantId);
	public Set<Product> viewProducts(int merchantId, String category);
	public Product getProduct(int productId);
	public List<String> getCategories(int merchantId);
	public boolean delProduct(int merchantId, String category);
	public MerchantDetails getMerchant(int merchantId);

}
