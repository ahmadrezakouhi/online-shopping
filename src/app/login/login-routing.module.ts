import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LonginComponent } from "./login.component";

const routes:Routes=[
    {
        path:'login',component:LonginComponent
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
export class LoginRoutingModule {
    
}