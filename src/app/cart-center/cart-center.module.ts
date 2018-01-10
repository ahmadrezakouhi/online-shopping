import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCenterComponent } from "./cart-center.component";
import { CartCenterRoutingModule } from "./cart-center-routing.module";
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { CartModule } from "./cart/cart.module";
import { FormsModule } from "@angular/forms";
import { AuthGuardService } from "./service/auth-guard.service";
import { PersonalInformationService } from "./personal-information/service/personal-information.service";
import { InformationService } from "./service/information.service";
import { ChangePasswordModule } from "./change-password/change-password.module";
@NgModule({
  imports: [
    ChangePasswordModule,
    CartModule,
    FormsModule,
    CommonModule,
    CartCenterRoutingModule
  ],
  declarations: [
   CartCenterComponent,
   PersonalInformationComponent,
  
   
  ],
  providers:[AuthGuardService
    ,PersonalInformationService
    ,InformationService
  ]
  
})
export class CartCenterModule { }
