import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/Merchant/add_product/add_product.component';
import { ProductsComponent } from './Components/Merchant/products/products.component';
import { ProfileComponent } from './Components/Merchant/profile/profile.component';
import { ProductDetailsComponent } from './Components/Merchant/product_details/product_details.component';
import  { HeaderComponent } from './Components/Merchant/header/header.component';
import { LoginComponent } from './Components/Merchant/login/login.component';
import {LogoutComponent } from './Components/Merchant/logout/logout.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,
        AddProductComponent,
        ProductsComponent,
        ProfileComponent,
        ProductDetailsComponent,
        HeaderComponent,
        LoginComponent,
        LogoutComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }