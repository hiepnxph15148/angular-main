import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList!: IProduct[]
  // productDetail!: IProduct;// undefined
  constructor(private productService:ProductService) {
    this.showProduct()
   }

  ngOnInit(): void {
  }
  showProduct(){
     this.productService.getProducts().subscribe(data =>{
      this.productList=data
    })
  }
  onRemoveProduct(id:number){
    this.productService.removeProduct(id).subscribe(() =>{
      this.productList = this.productList.filter(item =>item.id !== id)
    });
  }
  // Detailproduct(id:number){
  //   this.productDetail = this.productList.find(item =>item.id === id)!;
  // }
}
