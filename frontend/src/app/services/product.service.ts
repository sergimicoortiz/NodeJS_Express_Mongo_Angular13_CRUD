import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product/product.module';

const URL = 'http://localhost:3000/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  all_products(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }
}
