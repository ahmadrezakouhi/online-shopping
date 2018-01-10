import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ProductService } from "./service/product.service";
import { FormsModule } from "@angular/forms";
@NgModule({
declarations:[
    
HomeComponent
],
imports:[
    FormsModule,
CommonModule,
   HomeRoutingModule
],
exports:[
    
],
providers:[
    ProductService
]
})

export class HomeModule{

}