import { Component, OnInit } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { ProductsComponent } from 'src/app/Components/Merchant/products/products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  show=true;

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    
  }
  display(){
    this.show = false;
    this.router.navigate(['/products_page']);

    
  }

}
