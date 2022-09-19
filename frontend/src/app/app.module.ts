import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    ListProductsComponent,
    DetailProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
