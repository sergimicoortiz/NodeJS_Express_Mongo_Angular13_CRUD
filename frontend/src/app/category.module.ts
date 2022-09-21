import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
