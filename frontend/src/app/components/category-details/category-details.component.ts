import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCategory: Category = {
    category_name: '',
    category_picture: ''
  };

  message = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCategory(this.route.snapshot.params["id"]);
    }
  }

  getCategory(id: string): void {
    this.categoryService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCategory = data;
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      category_name: this.currentCategory.category_name,
      category_picture: this.currentCategory.category_picture
    };

    this.message = '';

    this.categoryService.update(this.currentCategory._id, data)
      .subscribe({
        next: (res) => {
          this.toastrService.success("This category has been updated")
        },
        error: (e) => this.toastrService.error("Can't update this category")
      });
  }

  updateCategory(): void {
    this.message = '';

    this.categoryService.update(this.currentCategory._id, this.currentCategory)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastrService.success("This category has been updated")
        },
        error: (e) => this.toastrService.error("Can't update this category")
      });
  }

  deleteCategory(): void {
    this.categoryService.delete(this.currentCategory._id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/category']);
          this.toastrService.success("This category has been removed")
        },
        error: (e) => this.toastrService.error("Can't remove this category")
      });
  }

}
