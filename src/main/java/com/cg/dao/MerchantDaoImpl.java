package com.cg.dao;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cg.entity.MerchantDetails;
import com.cg.entity.Product;
import com.cg.repository.MerchantRepository;
import com.cg.repository.ProductRepository;

@Repository
public class MerchantDaoImpl implements MerchantDaoInterface{

	@Autowired
	MerchantRepository merchantRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Override
	public boolean addProduct(Product product) {
		MerchantDetails merchant1 = merchantRepository.getOne(1);
		Set<Product> set = merchant1.getProducts();
		
		product.setProductImage("F:\\Angular\\Angular6-SampleProject\\CapStoreMerchantAngular\\src\\assets\\images\\product.jpg");
		product.setProductActivated(true);
		product.setStatus(true);
		
		set.add(product);
		merchant1.setProducts(set);
		merchantRepository.save(merchant1);
		
		return true;
	}

	@Override
	public Set<Product> viewProducts(int merchantId) {
		MerchantDetails merchant = merchantRepository.findById(merchantId).get();
		return merchant.getProducts();
	}

	@Override
	public Product getProduct(int productId) {
		System.out.println(productId);
		System.out.println("HELLOOOOOOOOOOOOOOOOOOOOOOO");
		Product product = productRepository.findById(productId).get();
		System.out.println(product);
		return product;
	}

}
