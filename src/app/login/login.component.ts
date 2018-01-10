import { Component ,OnInit ,EventEmitter,Output} from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { Login } from "./model/login";
import { Observable } from "rxjs/Observable";

@Component({
templateUrl:'login.component.html'
})

export class LonginComponent implements OnInit {
    log_in:Login=new Login('','');
    message=false;
    showModal='none';
   
   constructor(
       private authService:AuthService,
       private router:Router
   ){

   }

   ngOnInit(){
       console.log(this.authService.isLoggedIn)
   }
   login(){
      

    this.authService.authentication(this.log_in).subscribe(
        res => { 
            this.message=this.authService.isLoggedIn = res['answer']; 
            this.authService.isAdmin=res['admin'];
            if(res['admin']){
           
                this.router.navigate(['/admin'])
            }

            if(res['answer']){
               
                this.router.navigate(['/cart-center']);
            }

           
           
            this.message=!res['answer'];
            if(!res['answer']){

                this.showModal='block';
                this.showingModal();
            }
            console.log(res)
            localStorage.setItem('id',res['id']);

          
            
        
    },
        erro=>console.log(erro)
    )

   }

   showingModal(){
      
       setTimeout(() => this.showModal = 'none',3000
    )
   }
}