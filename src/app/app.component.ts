import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./service/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
show:boolean=false;
  constructor(private router:Router,
  private authService:AuthService ){



  }

name:string='ورود';
enter(){

  if(localStorage.getItem('id')!=null&&this.authService.isLoggedIn){

    // this.name='حساب کاربری';
    this.router.navigate(['/cart-center'])
  }
 else if(localStorage.getItem('id')!=null&&this.authService.isAdmin){
  //  this.name = 'حساب کاربری';
    this.router.navigate(['/admin'])

  }
  else{
    // this.name = 'ورود';
    this.router.navigate(['/login'])

  }
}




}
