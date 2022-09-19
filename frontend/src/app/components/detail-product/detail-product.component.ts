import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  message = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      console.log("no view")
    }
  }

  @Input() viewMode = false;

  @Input() currentProduct: Product = {
    name: "",
    price: 0,
    description: "",
    owner: "",
    category: "",
    picture: []
  }

  deleteProduct(id: String): void {
    this.productService.delete_product(id).subscribe({
      next: data => {
        console.log(data);
        window.location.reload();
      },//next
      error: e => {
        console.error(e);
      }//error
    });//subscribe
  }//deleteProduct

  updateProduct(): void {

  }//updateProduct

}//class