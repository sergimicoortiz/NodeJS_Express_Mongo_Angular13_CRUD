import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
    { path: '', component: ListProductsComponent },
    { path: 'add', component: AddProductComponent },
    { path: ':id', component: ListProductsComponent },
    { path: 'update/:id', component: AddProductComponent },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }