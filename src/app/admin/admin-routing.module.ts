import { NgModule } from "@angular/core";
import { Routes ,RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductsComponent } from "./products/products.component";
import { AuthGuardGuard } from "./service/auth-guard.guard";
const routes:Routes=[
    {
        path:'admin',component:AdminComponent,
        canActivate:[AuthGuardGuard],
        children:[
            {path:'orders',component:OrdersComponent},
            {path:'',component:ProductsComponent}
        ]
    }
]
@NgModule({
imports:[
    RouterModule.forChild(routes)
],
exports:[
RouterModule
]
})
export class AdminRoutingModule{

}