import { Component } from "@angular/core";
import { RegisterService } from "./service/register.service";
import { Person } from "./model/person";
@Component({
    templateUrl:'register.component.html'
})
export class RegisterComponent{
    
    person:Person=
    new Person('','','','',0,'','');
    constructor(private service:RegisterService){

    }
    onSubmit(){
        this.service.register(this.person).subscribe(
            res=>console.log(res),
            error=>console.log(error)
        );
    }

   
}