package com.cg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.cg.repository")
public class CapStoreMerchantApplication  {

	/*
	 * @Autowired private MerchantRepository merchantRepository;
	 */
	
	public static void main(String[] args) {
		SpringApplication.run(CapStoreMerchantApplication.class, args);
	}
	
	/*
	 * @Override public void run(String... args) throws Exception { MerchantDetails
	 * merchant1 = new MerchantDetails("Merchant 1", "merchant1", "m1234",
	 * "merchant1@gmail.com", "Merchant", true, "What is your age", "21",
	 * "7895421237", null, null, null, null, null, null, true, 4); MerchantDetails
	 * merchant2 = new MerchantDetails("Merchant 2", "merchant2", "m2234",
	 * "merchant2@gmail.com", "Merchant", true, "What is your age", "21",
	 * "7895221222", null, null, null, null, null, null, true, 3);
	 * 
	 * merchantRepository.save(merchant1); merchantRepository.save(merchant2); }
	 */

}
