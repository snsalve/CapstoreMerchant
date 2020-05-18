import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MerchantService } from 'src/app/Service/merchant.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product_details',
  templateUrl: './product_details.component.html',
  styleUrls: ['./product_details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  product = new Product(null,"","",null,null,null,"",null,"",null,"",null,null,null);
  constructor(private activatedRoute: ActivatedRoute, private merchantService: MerchantService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { 
       this.id = params.get('id'); 
       console.log(this.id);
       this.merchantService.getProduct(this.id).subscribe(data => this.product=data);
          
   });
  }

}