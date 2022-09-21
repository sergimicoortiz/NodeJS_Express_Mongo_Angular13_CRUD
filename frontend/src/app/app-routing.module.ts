import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  {
    path: 'category',
    loadChildren: () => import('./category.module').then(m => m.CategoryModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
  
})

export class AppRoutingModule { }