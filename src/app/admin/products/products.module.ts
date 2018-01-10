import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsService } from "./service/products.service";
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [ProductsComponent],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { 
 
}
