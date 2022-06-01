import { Component } from '@angular/core';
import mokData from 'src/data';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  productList :IProduct[] = mokData;
  onHandleAdd(product:any){
    this.productList.push(product)
  }
  // myName="Hiệp"
  // productList: IProduct[] = [
  //   {
  //     id: 1,
  //     name: "product A",
  //     price: 200,
  //     status: false
  //   },
  //   {
  //     id: 2,
  //     name: "product B",
  //     price: 300,
  //     status: true
  //   }
  // ]
  // onHandleAdd(product:any){
  //   console.log("product",product)
  //   this.productList.push(product)
  // }

  }
