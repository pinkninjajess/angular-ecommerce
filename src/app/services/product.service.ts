import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Product } from '../common/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GETResponse>(this.baseUrl)
      .pipe(
        map(response => response._embedded.products)
      );
  }
}

interface GETResponse {
  _embedded: {
    products: Product[];
  };
}

