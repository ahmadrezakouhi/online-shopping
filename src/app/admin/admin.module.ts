import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from "./admin-routing.module";
import { OrdersModule } from "./orders/orders.module";
import { ProductsModule } from "./products/products.module";
import { AuthGuardGuard } from "./service/auth-guard.guard";
@NgModule({
  imports: [
    ProductsModule,
    OrdersModule,
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent],
  providers:[
    AuthGuardGuard
  ]
})
export class AdminModule { }
