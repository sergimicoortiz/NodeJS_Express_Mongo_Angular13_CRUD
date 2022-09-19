import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

const URL = 'http://localhost:3001/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  all_products(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  delete_product(id: String): Observable<Product[]> {
    return this.http.delete<Product[]>(`${URL}/${id}`);
  }
}
