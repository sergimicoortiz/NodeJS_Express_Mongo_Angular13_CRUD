import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from "./components/add-category/add-category.component";
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryDetailsComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'products/:id', component: ListProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }