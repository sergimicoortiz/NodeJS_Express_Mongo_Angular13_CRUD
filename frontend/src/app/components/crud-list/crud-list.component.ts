import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/models/crud.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  crud?: Crud[];
  currentCrud: Crud = {};
  currentIndex = -1;
  category_name = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.retrieveCrud();
  }

  retrieveCrud(): void {
    this.crudService.getAll()
      .subscribe({
        next: (data) => {
          this.crud = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCrud();
    this.currentCrud = {};
    this.currentIndex = -1;
  }

  setActiveCrud(crud: Crud, index: number): void {
    this.currentCrud = crud;
    this.currentIndex = index;
  }

  // removeAllCrud(): void {
  //   this.crudService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  searchCategory_name(): void {
    this.currentCrud = {};
    this.currentIndex = -1;

    this.crudService.findByCategory_name(this.category_name)
      .subscribe({
        next: (data) => {
          this.crud = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}