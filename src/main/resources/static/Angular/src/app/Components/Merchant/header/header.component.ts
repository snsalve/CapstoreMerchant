import { Component, OnInit } from '@angular/core';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { MerchantDetails } from 'src/app/Models/MerchantDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
  message="Sent From Parent";
  result="";

  showMenu(menu){
      menu.style.display="block";  
    }
    closeMenu(menu){
      menu.style.display="none";
    }

  constructor(private router: Router) { }

  ngOnInit() {
    

  }

}