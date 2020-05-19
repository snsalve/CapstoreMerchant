import { Component, OnInit } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { ProductsComponent } from 'src/app/Components/Merchant/products/products.component';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/Service/merchant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  // orders=[
  //   "Grocery","Clothing","Books","Electronics"
  // ]
  
  categories:string[];

  constructor(private merchantService: MerchantService) {}

  ngOnInit() {
    let id=sessionStorage.getItem('merchant');
    this.merchantService.getCategory(parseInt(id)).subscribe( data => this.categories=data);
  }
  

}
