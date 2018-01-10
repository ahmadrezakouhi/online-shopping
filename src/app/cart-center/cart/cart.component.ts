import { Component, OnInit } from '@angular/core';
import { CartService } from "./service/cart.service";
import { Observable } from 'rxjs/Observable';
import { Format } from "../../format/format";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
carts:Observable<any[]>
f= new Format();
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.cartService.getCarts().subscribe(
      res=>this.carts=res
    )
  }

  delete(cId){
    this.cartService.removeItem({cartId:cId}).subscribe(
      res=>{
        this.cartService.getCarts().subscribe(
          res=>this.carts=res
        )
      }
    )

  }

}
