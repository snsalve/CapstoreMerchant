import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MerchantService } from 'src/app/Service/merchant.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  fileToUpload: File = null;
  addForm: FormGroup;
  submitted: boolean = false;
  imageUrl: string = "/assets/images/noimage.png";
  categories:string[];
  id=sessionStorage.getItem('merchant');
  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router) { }

  
  ngOnInit(): void{
    this.addForm=this.formBuilder.group({
      productName: ['', [Validators.required]],
      productBrand: ['', [Validators.required]],
      productInfo: ['', [Validators.required]],
      productCategory: ['', [Validators.required]],
      noOfProducts: ['', [Validators.required]],
      productPrice: ['',[Validators.required, Validators.pattern("[1-9][0-9]{1,6}")]],
      productRating: ['',[Validators.required, Validators.pattern("[1-5]{1}")]],
      productImage: ['', [Validators.required]],
      discount: ['',[Validators.required, Validators.max(100)]],
    });

    this.merchantService.getCategory(parseInt(this.id)).subscribe( data => this.categories=data);
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
    //console.log(this.addForm.controls.productImage.value);
    //console.log(this.imageUrl);
    if (this.addForm.invalid) {
      return; 
    }
    for(let category of this.categories){
      if(this.addForm.controls.productCategory.value == category){
        alert("Category already exists");
        return;
      }
    }
    
    this.merchantService.addProduct(this.addForm.value, this.id).subscribe(data => {
        if(data){
        alert(`Category ${this.addForm.controls.productCategory.value} Added Successfully`);
        this.router.navigate(['/header_page/profile_page']);
        }
    },err => {
      console.log(err.stack);
    })
  }
}
