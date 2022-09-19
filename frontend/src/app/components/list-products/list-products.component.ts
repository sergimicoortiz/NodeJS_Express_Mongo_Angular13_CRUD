import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products?: Product[];
  currentIndex: Number = -1;
  currentProduct: Product = {
    name: "",
    price: 0,
    description: "",
    owner: "",
    category: "",
    picture: []
  };

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

  set_product(product: Product, i: Number): void {
    this.currentIndex = i;
    this.currentProduct = product;
  }

  delete_all_product(): void {
    this.productService.delete_all_products().subscribe({
      next: data => {
        //console.log(data);
        this.products = [];
      },
      error: e => {
        console.error(e);
      }
    });
  }

}
