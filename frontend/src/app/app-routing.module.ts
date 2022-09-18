import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { CrudDetailsComponent } from './components/crud-details/crud-details.component';
import { AddCrudComponent } from "./components/add-crud/add-crud.component";

const routes: Routes = [
  { path: '', redirectTo: 'crud', pathMatch: 'full' },
  { path: 'crud', component: CrudListComponent },
  { path: 'crud/:id', component: CrudDetailsComponent },
  { path: 'add', component: AddCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }