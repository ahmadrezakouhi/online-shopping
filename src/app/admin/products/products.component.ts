import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./service/products.service";
import { Observable } from 'rxjs/Observable';
import { Format } from "../../format/format";
import { Product } from "./model/product";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products;
f:Format=new Format();
product:Product=new Product('','','',0,'');
change:boolean=false;
Id:number=0;
  constructor(
    private productsService: ProductsService
  ) {

  }

  ngOnInit() {

    this.productsService.getProducts().subscribe(
      res=>this.products=res
    );
  }
  deleteItem(id){
this.productsService.deleteItem({productId:id}).
subscribe(res=>{
  console.log(res)
  this.productsService.getProducts().subscribe(
    res => this.products = res
  );
})
  }


  register(){
    if(this.change){
this.productsService.updateItem({
  productId:this.Id,
  productName:this.product.productName,
  productType:this.product.productType,
  price:this.product.price,
  imageSource:this.product.imageSource,
  description:this.product.description
}).subscribe(
  res=>{
    console.log(res)
    this.productsService.getProducts().subscribe(
      res => this.products = res
    );
  }

)
this.product=null;
this.product=new Product('','','',0,'');
this.change=false;
      return;
    }
this.productsService.addItem(this.product).
subscribe(
  res=>{
    console.log(res);
    this.productsService.getProducts().subscribe(
      res => this.products = res
    );
  }
)
  }
  changing(id){
this.change=true;
this.product=this.products.find(x=>x.productId==id);
this.Id=id;
  }

}
