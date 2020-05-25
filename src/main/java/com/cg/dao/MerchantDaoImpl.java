package com.cg.dao;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

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
	public boolean addProduct(Product product, int merchantId) {
		MerchantDetails merchant1 = merchantRepository.getOne(merchantId);
		Set<Product> set = merchant1.getProducts();
		
		//product.setProductImage("F:\\Angular\\Angular6-SampleProject\\CapStoreMerchantAngular\\src\\assets\\images\\product.jpg");
		product.setProductActivated(true);
		product.setStatus(true);
		
		set.add(product);
		merchant1.setProducts(set);
		merchantRepository.save(merchant1);
		
		return true;
	}

	@Override
	public Set<Product> viewProducts(int merchantId, String category) {
		MerchantDetails merchant = merchantRepository.findById(merchantId).get();
		Set<Product> prod = merchant.getProducts();
		Set<Product> products = new HashSet<>();
		for (Product product : prod) {
			if(product.getProductCategory().equalsIgnoreCase(category))
				products.add(product);
		}
		System.out.println(products);

		return products;
	}

	@Override
	public Product getProduct(int productId) {
		return productRepository.findById(productId).get();
	}
	
	@Override
	public List<String> getCategories(int merchantId) {
		MerchantDetails merchant = merchantRepository.findById(merchantId).get();
		Set<Product> set = merchant.getProducts();
		List<String> categories = new ArrayList<>();
		for (Product product : set) {
			String cat = product.getProductCategory();
			if(!categories.contains(cat))
				categories.add(cat);
		}
		return categories;
		
	}

	@Override
	public boolean delProduct(int merchantId, String category) {
		MerchantDetails merchant = merchantRepository.findById(merchantId).get();
		Set<Product> products = merchant.getProducts();
		for (Product product : products) {
			if(product.getProductCategory().equals(category))
				productRepository.delete(product);
		}
		return true;
	}

	@Override
	public MerchantDetails getMerchant(int merchantId) {
		return merchantRepository.findById(merchantId).get();
	}

	
}
