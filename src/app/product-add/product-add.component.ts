import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product :IProduct={
    name: "",
    price: 0,
    id: 0,
    status: false
  }
  constructor(
    private productService: ProductService
    ,private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }
  // Submithand(){
  //   console.log("submit")
  //   console.log(this.product)
  //   this.onAdd.emit(this.product)
  // }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.updateProduct(this.product).subscribe(data => {
        setTimeout(() => {
          // redirect về product list
          this.router.navigateByUrl('/product');
        }, 2000)
      })
    }
    this.productService.addProduct(this.product).subscribe(data => {
      setTimeout(() => {
        // redirect về product list
        this.router.navigateByUrl('/products');
      }, 2000)
    });
  }
}
