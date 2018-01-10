import { Component, OnInit } from '@angular/core';
// import { PersonalInformationService } from "./service/personal-information.service";
import { InformationService } from "../service/information.service";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
person;
  constructor(//private personalInformationService:PersonalInformationService
  private informationService:InformationService
) { }

  ngOnInit() {
    // this.personalInformationService.getInformation(
    //   { id: localStorage.getItem('id')} ).subscribe(
    //     res=>{this.person=res[0];
          
    //       console.log(this.person);
    //     }
        
    //   )
    this.informationService.person.subscribe(
      res=>this.person=res[0]
    );
    
  }

}
