package com.cg.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.MerchantDetails;
import com.cg.entity.Product;
import com.cg.service.MerchantServiceInterface;

@RestController
@RequestMapping("/merchant")
@CrossOrigin(origins = "http://localhost:4200",  allowedHeaders = "*")
public class MerchantController {
	
	@Autowired
	MerchantServiceInterface merchantServiceInterface;
	
	@PostMapping(value = "/add/{merchant_id}")
	public boolean add(@RequestBody Product product, @PathVariable("merchant_id")int merchantId) {
		return merchantServiceInterface.addProduct(product,merchantId);
	}
	
	@GetMapping(value = "/view/{merchant_id}/{category}")
	public Set<Product> view(@PathVariable("merchant_id")int merchantId, @PathVariable("category")String category) {
		return merchantServiceInterface.viewProducts(merchantId,category);
	}
	
	@GetMapping(value = "/singleProduct/{product_id}")
	public Product getProduct(@PathVariable("product_id")int productId) {
		return merchantServiceInterface.getProduct(productId);
	}
	
	@GetMapping(value = "/getCategories/{merchant_id}")
	public List<String> getCategories(@PathVariable("merchant_id")int merchantId) {
		return merchantServiceInterface.getCategories(merchantId);
	}
	
	@GetMapping(value = "/delCategory/{merchant_id}/{category}")
	public boolean delCategory(@PathVariable("merchant_id")int merchantId, @PathVariable("category")String category) {
		return merchantServiceInterface.delProduct(merchantId, category);
	}
	
	@GetMapping(value = "/getMerchant/{merchant_id}")
	public MerchantDetails getMerchant(@PathVariable("merchant_id")int merchantId) {
		return merchantServiceInterface.getMerchant(merchantId);
	}
}
