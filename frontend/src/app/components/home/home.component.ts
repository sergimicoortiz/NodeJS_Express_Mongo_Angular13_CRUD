import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products?: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.all_products();
  }

  all_products(): void {
    this.productService.all_products().subscribe({
      next: data => {
        this.products = data;
        //console.log(data);
      },
      error: e => {
        console.error(e);
      }
    })//subscribe
  }//all_products

}//class
