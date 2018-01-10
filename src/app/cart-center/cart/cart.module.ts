import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CartService } from "./service/cart.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        CommonModule
    ]
    ,

    declarations:[
       
CartComponent
    ],
    providers:[
        CartService
    ],
    exports:[
       
    ]
})
export class CartModule{

}