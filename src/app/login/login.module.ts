import { NgModule } from "@angular/core";
import { LonginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
declarations:[
    LonginComponent
]
,
imports:[
    CommonModule,
    FormsModule,
    LoginRoutingModule
]
})
export class LoginModule{

}