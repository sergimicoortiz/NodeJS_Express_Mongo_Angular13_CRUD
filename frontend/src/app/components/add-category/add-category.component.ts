import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';


//Form reactive
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

    form: FormGroup = new FormGroup({
        category_name: new FormControl(''),
        category_picture: new FormControl('')
    });

    category: Category = {
        category_name: "",
        category_picture: ""
    };
    submitted = false;

    constructor(private categoryService: CategoryService, private toastrService: ToastrService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                category_name: ['', Validators.required],
                category_picture: ['', Validators.required],
            },
        );
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.submitted = false;
            console.log(this.form.controls);
            return;
        }else{
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
    }

    newCategory(): void {
        this.submitted = false;
        this.category = {
            category_name: "",
            category_picture: ""
        };
    }
}