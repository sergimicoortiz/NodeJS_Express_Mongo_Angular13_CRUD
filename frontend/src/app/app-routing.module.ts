import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from "./components/add-category/add-category.component";
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryDetailsComponent },
  { path: 'add/category', component: AddCategoryComponent },
  { path: 'product', component: ListProductsComponent },
  { path: 'product/:id', component: ListProductsComponent },
  { path: 'add/product', component: AddProductComponent },
  { path: 'update/product/:id', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }