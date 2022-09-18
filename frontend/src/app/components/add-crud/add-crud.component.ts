import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/models/crud.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-crud',
  templateUrl: './add-crud.component.html',
  styleUrls: ['./add-crud.component.css']
})

export class AddCrudComponent implements OnInit {

  crud: Crud = {
      category_name: "",
      category_picture: ""
  };
  submitted = false;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  saveCrud(): void {
      const data = {
          category_name: this.crud.category_name,
          category_picture: this.crud.category_picture
      };

      this.crudService.create(data)
          .subscribe({
              next: (res) => {
                  console.log(res);
                  this.submitted = true;
              },
              error: (e) => console.log(e)
          });
  }

  newCrud(): void {
      this.submitted = false;
      this.crud = {
          category_name: "",
          category_picture: ""
      };
  }

}