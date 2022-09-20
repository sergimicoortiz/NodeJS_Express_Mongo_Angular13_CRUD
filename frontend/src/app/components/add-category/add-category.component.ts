import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

    constructor(private categoryService: CategoryService, private toastrService: ToastrService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                category_name: ['', [Validators.required, Validators.minLength(4)]],
                category_picture: ['', [Validators.required, Validators.minLength(4)]]
            },
        );
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        } else {
            this.categoryService.create(this.form.value)
                .subscribe({
                    next: (res) => {
                        this.toastrService.success("This category has been aded");
                    },
                    error: (e) => this.toastrService.error("Can't add this category")
                });
        }
    }

}