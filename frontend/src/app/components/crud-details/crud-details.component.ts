import { Component, OnInit, Input } from '@angular/core';
import { Crud } from '../../models/crud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud-details',
  templateUrl: './crud-details.component.html',
  styleUrls: ['./crud-details.component.css']
})
export class CrudDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCrud: Crud = {
    category_name: '',
    category_picture: ''
  };
  
  message = '';

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("asd")
    if (!this.viewMode) {
      this.message = '';
      this.getCrud(this.route.snapshot.params["id"]);
    }
  }

  getCrud(id: string): void {
    this.crudService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCrud = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      category_name: this.currentCrud.category_name,
      category_picture: this.currentCrud.category_picture
    };

    this.message = '';

    this.crudService.update(this.currentCrud._id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateCrud(): void {
    this.message = '';

    this.crudService.update(this.currentCrud._id, this.currentCrud)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCrud(): void {
    this.crudService.delete(this.currentCrud._id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/crud']);
        },
        error: (e) => console.error(e)
      });
  }

}
