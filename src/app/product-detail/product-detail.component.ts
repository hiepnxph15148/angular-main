import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import mokData from 'src/data';
import { IProduct } from '../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = this.router.snapshot.paramMap.get('id')!;
    // this.productDetail = mockData.find(item => item.id == +id)!;
    this.productService.getProduct(+id).subscribe(data => {
      this.productDetail = data
    })
  }
  
  ngOnInit(): void {
  }
}
