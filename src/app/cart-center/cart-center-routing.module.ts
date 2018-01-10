import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCenterComponent } from './cart-center.component';
import { Routes,RouterModule } from "@angular/router";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { CartComponent } from "./cart/cart.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { AuthGuardService } from "./service/auth-guard.service";
const routes:Routes=[
  {path:'cart-center',component:CartCenterComponent,
  canActivate:[AuthGuardService],
children:[
  {path:'',component:PersonalInformationComponent},
  {path:'cart',component:CartComponent},
  {path:'change-password',component:ChangePasswordComponent}

]
}
]
@NgModule({
  imports: [
    CommonModule
    ,
    RouterModule.forChild(routes)
  ]
  ,
  exports:[
    RouterModule
  ]
})
export class CartCenterRoutingModule { }
