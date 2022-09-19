import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  new_product: Product = {
    name: "",
    price: 0,
    description: "",
    owner: "",
    category: "",
    picture: ['p1test', 'p2test']
  };
  constructor(private product_service: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params["id"]) {
      this.get_product(this.route.snapshot.params["id"]);
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

  }//update_product

  get_product(id: String): void {
    console.log(id);
  }//get_product
}//class