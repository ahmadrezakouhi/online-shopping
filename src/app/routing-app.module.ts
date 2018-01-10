import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
const routes :Routes=[
   
    {path:"",redirectTo:"/home",pathMatch:"full"}
  
]
@NgModule(
    {
imports:[
    RouterModule.forRoot(routes, { enableTracing: true })
],
exports:[
    RouterModule
]
    }
)
export class RoutingAppModule{
    
}