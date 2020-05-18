import { Component, OnInit } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { Product } from 'src/app/Models/product';
import { FormBuilder } from '@angular/forms';
import { MerchantService } from 'src/app/Service/merchant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  product:Product[];
  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router) { }

  ngOnInit() {
    this.merchantService.viewProduct(1).subscribe( data => {this.product=data} );
  }

}
