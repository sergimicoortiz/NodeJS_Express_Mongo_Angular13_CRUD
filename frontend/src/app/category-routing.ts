import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

const routes: Routes = [
  {
    path: '', component: CategoryListComponent,
  },
  {
    path: 'add', component: AddCategoryComponent,
  },
  {
    path: ':id', component: CategoryDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }