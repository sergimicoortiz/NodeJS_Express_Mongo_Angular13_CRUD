import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crud } from '../models/crud.model';

const baseUrl = 'http://localhost:3001/category';
console.log(baseUrl)

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Crud[]> {
    return this.http.get<Crud[]>(baseUrl);
  }

  get(id: any): Observable<Crud> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCategory_name(category_name: any): Observable<Crud[]> {
    return this.http.get<Crud[]>(`${baseUrl}?category_name=${category_name}`);
  }
}