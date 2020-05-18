import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './Components/Merchant/add_product/add_product.component';
import { ProductsComponent } from './Components/Merchant/products/products.component';
import { ProfileComponent } from './Components/Merchant/profile/profile.component';
import { ProductDetailsComponent } from './Components/Merchant/product_details/product_details.component';
import  { HeaderComponent } from './Components/Merchant/header/header.component';
import { LoginComponent } from './Components/Merchant/login/login.component';
import {LogoutComponent } from './Components/Merchant/logout/logout.component';


export const routes: Routes = [
    { path: 'login_page', component: LoginComponent },
    { path: 'header_page', component: HeaderComponent ,
      children: [
          { path: 'addProduct_page', component: AddProductComponent },
          { path: 'products_page', component: ProductsComponent },
          { path: 'profile_page', component: ProfileComponent },
          { path: 'productDetails_page/:id', component: ProductDetailsComponent},
          { path: 'logout_page', component: LogoutComponent } 
        ]
    }
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents=[AddProductComponent,ProductsComponent,ProfileComponent,
    ProductDetailsComponent, HeaderComponent, LoginComponent, LogoutComponent]
  