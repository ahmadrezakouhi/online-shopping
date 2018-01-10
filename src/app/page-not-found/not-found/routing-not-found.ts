import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";
const routes:Routes=[
    {path:"notfound",component:NotFoundComponent},
    {path:"**",redirectTo:"/notfound",pathMatch:"full"}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
,
exports:[
    RouterModule
]
})
export class RoutingNotFound{

}