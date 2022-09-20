import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

    category: Category = {
        category_name: "",
        category_picture: ""
    };
    submitted = false;

    constructor(private categoryService: CategoryService, private toastrService: ToastrService) { }

    ngOnInit(): void {
    }

    saveCategory(): void {
        const data = {
            category_name: this.category.category_name,
            category_picture: this.category.category_picture
        };

        this.categoryService.create(data)
            .subscribe({
                next: (res) => {
                    this.submitted = true;
                    this.toastrService.success("This category has been aded")
                },
                error: (e) => this.toastrService.error("Can't add this category")
            });
    }

    newCategory(): void {
        this.submitted = false;
        this.category = {
            category_name: "",
            category_picture: ""
        };
    }
}