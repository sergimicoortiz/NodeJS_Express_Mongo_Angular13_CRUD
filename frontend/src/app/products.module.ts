import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing';

import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProductComponent,
    ListProductsComponent,
    DetailProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
