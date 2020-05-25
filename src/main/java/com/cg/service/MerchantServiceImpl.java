package com.cg.service;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cg.dao.MerchantDaoInterface;
import com.cg.entity.MerchantDetails;
import com.cg.entity.Product;

@Service
public class MerchantServiceImpl implements MerchantServiceInterface{

	@Autowired
	MerchantDaoInterface merchantDao;
	
	@Override
	public boolean addProduct(Product product, int merchantId) {
		return merchantDao.addProduct(product, merchantId);
		
	}

	@Override
	public Set<Product> viewProducts(int merchantId, String category) {
		return merchantDao.viewProducts(merchantId, category);
		
	}

	@Override
	public Product getProduct(int productId) {
		return merchantDao.getProduct(productId);
	}

	@Override
	public List<String> getCategories(int merchantId) {
		return merchantDao.getCategories(merchantId);
	}

	@Override
	public boolean delProduct(int merchantId, String category) {
		return merchantDao.delProduct(merchantId, category);
	}

	@Override
	public MerchantDetails getMerchant(int merchantId) {
		return merchantDao.getMerchant(merchantId);
	}

	

}
