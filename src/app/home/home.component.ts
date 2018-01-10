import { Component,OnInit } from "@angular/core";
import { ActivatedRoute,ParamMap } from "@angular/router";
import { ProductService } from "./service/product.service";
import { Observable } from "rxjs/Observable";
import { Format } from "../format/format";
 @Component({
selector:"home",
templateUrl:"./home.component.html",
styleUrls:['./home.component.css']
 })
 export class HomeComponent implements OnInit {
     products:Observable<any[]>;
     f=new Format();
     
    show='none';
     constructor(private productService:ProductService){

     }
ngOnInit(){
this.productService.getProducts().subscribe(x=>
this.products=x)
}
search(searchItem){
    this.productService.search({search:searchItem}).subscribe(
        res=>{
            this.products=res
           
if (this.products[0].isEmpty())
this.show='block';
else
this.show='none';
          })
}

ch(){
this.s='hello';
}
 }