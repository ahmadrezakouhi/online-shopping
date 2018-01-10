import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterService } from "./service/register.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
declarations:[

RegisterComponent
],
imports:[
    CommonModule,
    FormsModule,
RegisterRoutingModule
],
providers:[
RegisterService
]
})
export class RegisterModule{

}