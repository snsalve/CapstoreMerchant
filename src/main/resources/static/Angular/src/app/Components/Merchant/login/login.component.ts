import { Component, OnInit } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { MerchantDetails } from 'src/app/Models/MerchantDetails';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    merchantId = "1";

  constructor(private router: Router) { }

  ngOnInit() {
    

  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('merchant');
    return !(user===null);

  }
  login(){
    sessionStorage.setItem('merchant', this.merchantId);
    this.router.navigate(['/header_page/profile_page']);
  }

}