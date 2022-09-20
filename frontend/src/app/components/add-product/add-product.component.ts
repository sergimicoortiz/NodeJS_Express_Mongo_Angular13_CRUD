import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  update: Boolean = false;
  new_product: Product = {
    name: "",
    price: 0,
    description: "",
    owner: "",
    category: "",
    picture: ['p1test', 'p2test']
  };
  constructor(private product_service: ProductService, private router: Router, private route: ActivatedRoute, private toastrService: ToastrService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params["id"]) {
      this.get_product(this.route.snapshot.params["id"]);
      this.update = true;
    }
  }

  insert_product(): void {
    //console.log(this.new_product);
    this.product_service.insert_product(this.new_product).subscribe({
      next: data => {
        //console.log(data);
        this.router.navigate(['/product']);
      },
      error: e => {
        console.error(e);
      }
    });

  }//insert_product

  update_product(): void {
    this.product_service.update_product(this.new_product, this.route.snapshot.params["id"]).subscribe({
      next: data => {
        //console.log(data);
        this.router.navigate(['/product']);
      },
      error: e => {
        console.error(e);
      }
    });
  }//update_product

  get_product(id: String): void {
    this.product_service.get_product(id).subscribe({
      next: data => {
        this.new_product = data;
      },
      error: e => {
        console.error(e);
      }
    });
  }//get_product

  showAdd(): void {
    this.toastrService.success('Add success!');
  }//showAdd
}//class