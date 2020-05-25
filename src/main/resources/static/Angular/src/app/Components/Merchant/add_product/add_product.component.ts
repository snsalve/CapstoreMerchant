import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MerchantService } from 'src/app/Service/merchant.service';

@Component({
  selector: 'app-add_product',
  templateUrl: './add_product.component.html',
  styleUrls: ['./add_product.component.css']
})
export class AddProductComponent implements OnInit {
  
  fileToUpload: File = null;
  addForm: FormGroup;
  submitted: boolean = false;
  imageUrl: string = "/assets/images/noimage.png";

  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router) { }
  
  ngOnInit(): void{
    this.addForm=this.formBuilder.group({
      productName: ['', [Validators.required]],
      productBrand: ['', [Validators.required]],
      productInfo: ['', [Validators.required]],
      noOfProducts: ['', [Validators.required]],
      productPrice: ['',[Validators.required, Validators.pattern("[1-9][0-9]{1,6}")]],
      productRating: ['',[Validators.required, Validators.pattern("[1-5]{1}")]],
      productImage: ['', [Validators.required]],
      discount: ['',[Validators.required, Validators.max(100)]],
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      }
    reader.readAsDataURL(this.fileToUpload);
  }
  
 public add(){
    this.submitted = true;
    console.log(this.addForm.controls.productImage.value);
    //console.log(this.imageUrl);
    if (this.addForm.invalid) {
      return; 
    }
    let id=sessionStorage.getItem('merchant');
    this.merchantService.addProduct(this.addForm.value, id).subscribe(data => {
        if(data){
        alert(`Product ${this.addForm.controls.productName.value} Added Successfully`);
        this.router.navigate(['/header_page/products_page']);
        }
    },err => {
      console.log(err.stack);
    })

  }
  
}