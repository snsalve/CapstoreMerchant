import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './Components/Merchant/add_product/add_product.component';
import { ProductsComponent } from './Components/Merchant/products/products.component';
import { ProfileComponent } from './Components/Merchant/profile/profile.component';
import { ProductDetailsComponent } from './Components/Merchant/product_details/product_details.component';
import  { HeaderComponent } from './Components/Merchant/header/header.component';
import { LoginComponent } from './Components/Merchant/login/login.component';
import {LogoutComponent } from './Components/Merchant/logout/logout.component';
import { AddCategoryComponent } from './Components/Merchant/add-category/add-category.component';
import { RemoveCategoryComponent } from './Components/Merchant/remove-category/remove-category.component';
import { MerchantProfileComponent } from './Components/Merchant/merchant-profile/merchant-profile.component';


export const routes: Routes = [
    { path: 'login_page', component: LoginComponent },
    { path: 'header_page', component: HeaderComponent ,
      children: [
          { path: 'addProduct_page', component: AddProductComponent },
          { path: 'products_page/:category', component: ProductsComponent },
          { path: 'add_product_with_category', component: AddCategoryComponent },
          { path: 'remove_category', component: RemoveCategoryComponent },
          { path: 'profile_page', component: ProfileComponent },
          { path: 'productDetails_page/:id', component: ProductDetailsComponent},
          { path: 'merchant_profile', component: MerchantProfileComponent},
          { path: 'logout_page', component: LogoutComponent } 
        ]
    }
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents=[AddProductComponent,ProductsComponent,AddCategoryComponent,
     ProfileComponent, ProductDetailsComponent, RemoveCategoryComponent,
      MerchantProfileComponent, HeaderComponent, LoginComponent, LogoutComponent]
  