import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category?: Category[];
  currentCategory: Category = {};
  currentIndex = -1;
  category_name = '';

  constructor(private categoryService: CategoryService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.retrieveCategory();
  }

  retrieveCategory(): void {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          this.category = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCategory();
    this.currentCategory = {};
    this.currentIndex = -1;
  }

  setActiveCategory(category: Category, index: number): void {
    this.currentCategory = category;
    this.currentIndex = index;
  }

  removeAllCategory(): void {
    this.categoryService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
          this.toastrService.success("You remove all category's")
        },
        error: (e) => this.toastrService.error("Can't remove all category's")
      });
  }

  searchCategory_name(): void {
    this.currentCategory = {};
    this.currentIndex = -1;

    this.categoryService.findByCategory_name(this.category_name)
      .subscribe({
        next: (data) => {
          this.category = data;
        },
        error: (e) => console.error(e)
      });
  }

}