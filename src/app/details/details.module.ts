import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsProductService } from "./service/details-product.service";
@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  declarations: [DetailsComponent,
  ],
  providers:[DetailsProductService]
})
export class DetailsModule { }
