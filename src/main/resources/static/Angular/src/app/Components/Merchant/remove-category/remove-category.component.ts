import { Component, OnInit } from '@angular/core';
import { MerchantService } from 'src/app/Service/merchant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.css']
})
export class RemoveCategoryComponent implements OnInit {

  constructor(private merchantService: MerchantService, private router: Router) { }
  
  id = sessionStorage.getItem('merchant');
  categories:string[];

  ngOnInit() {
    this.merchantService.getCategory(parseInt(this.id)).subscribe(data => this.categories=data);
  }

  onClick(category:string){
    this.merchantService.delCategory(parseInt(this.id), category).subscribe( data => {
      if(data){
        alert("Category" + category + " deleted Successfully");
        this.router.navigate(['/header_page/remove_category']);
      }
    });
  }
}
