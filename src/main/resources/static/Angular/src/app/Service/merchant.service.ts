import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private httpClient :  HttpClient) { }

  public addProduct(product:Product, id:any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/merchant/add/${id}`, product );
  }

  public viewProduct(id:number, category:string): Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/merchant/view/${id}/${category}`);
  }

  public getProduct(id:number): Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/merchant/singleProduct/${id}`);
  }

  public getCategory(id:number): Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/merchant/getCategories/${id}`);
  }

  public delCategory(id:number, category:string): Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/merchant/delCategory/${id}/${category}`);
  }
}
