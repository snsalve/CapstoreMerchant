import { Component, OnInit } from '@angular/core';
import { MerchantService } from 'src/app/Service/merchant.service';
import { MerchantDetails } from 'src/app/Models/MerchantDetails';

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.css']
})
export class MerchantProfileComponent implements OnInit {

  constructor(private merchantService: MerchantService) { }
  merchant: MerchantDetails;
  id=sessionStorage.getItem('merchant');

  ngOnInit() {
    this.merchantService.getMerchant(parseInt(this.id)).subscribe(data => this.merchant=data );
  }

}
