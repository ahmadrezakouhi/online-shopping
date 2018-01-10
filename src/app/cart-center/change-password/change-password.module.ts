import { NgModule } from "@angular/core";
import { ChangePasswordComponent } from "./change-password.component";
import { ChangePasswordService } from "./service/change-password.service";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports:[
       FormsModule
    ]
    ,
declarations:[
    ChangePasswordComponent
],
providers:[
    ChangePasswordService
]
})
export class ChangePasswordModule{

}