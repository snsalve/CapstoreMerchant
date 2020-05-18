package com.cg.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.entity.Product;
import com.cg.service.MerchantServiceInterface;

@RestController
@RequestMapping("/merchant")
@CrossOrigin(origins = "http://localhost:4200",  allowedHeaders = "*")
public class MerchantController {
	
	@Autowired
	MerchantServiceInterface merchantServiceInterface;
	
	@PostMapping(value = "/add")
	public boolean add(@RequestBody Product product) {
		return merchantServiceInterface.addProduct(product);
	}
	
	@GetMapping(value = "/view/{merchant_id}")
	public Set<Product> view(@PathVariable("merchant_id")int merchantId) {
		return merchantServiceInterface.viewProducts(merchantId);
	}
	
	@GetMapping(value = "/singleProduct/{product_id}")
	public Product getProduct(@PathVariable("product_id")int productId) {
		return merchantServiceInterface.getProduct(productId);
	}

}
