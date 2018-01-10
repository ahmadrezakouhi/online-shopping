import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { InformationService } from "./service/information.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart-center.component.html',
  styleUrls: ['./cart-center.component.css']
})
export class CartCenterComponent implements OnInit {
name;
  constructor(
    private router :Router,
    private authService:AuthService
    ,private informationService:InformationService
  ) { }

  ngOnInit() {
    // this.informationService.getInformation(
    //   { id: localStorage.getItem('id') }).subscribe(
    //   res => {
    //   this.informationService.person = res[0];

    //     console.log(this.informationService.person);
    //   }

    //   )
   this.informationService.person= this.informationService.getInformation({id:localStorage.getItem('id')})
    this.informationService.person.subscribe(
    res=>{this.name=res[0];
    console.log(this.name)
    }
    )

  
  }

  logout(){
this.authService.isLoggedIn=false;
localStorage.removeItem('id');
this.router.navigate(['/login']);
  }


}
