import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { MerchantService } from 'src/app/Service/merchant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:Product[] = [];
  category:string;
  id=sessionStorage.getItem('merchant');
  constructor(private activatedRoute: ActivatedRoute, private merchantService: MerchantService) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.category = params.get('category'); 
      console.log(this.category);
      this.merchantService.viewProduct(parseInt(this.id), this.category).subscribe(data => this.product=data);
         
  });
   
  }

}
