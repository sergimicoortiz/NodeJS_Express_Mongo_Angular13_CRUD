import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCrudComponent } from './components/add-crud/add-crud.component';
import { CrudDetailsComponent } from './components/crud-details/crud-details.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCrudComponent,
    CrudDetailsComponent,
    CrudListComponent
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
