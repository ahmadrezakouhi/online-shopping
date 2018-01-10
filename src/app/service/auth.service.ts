import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class AuthService{
   public isLoggedIn=false;
public isAdmin=false;
   constructor(
       private http:HttpClient
   ){

   }
   authentication(param):Observable<{}>{
    return    this.http.post('http://localhost/php/shopping/login.php',param,
           {
               headers:
                   new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
               , observe: 'body', responseType: 'json',
           }
    );
   }
}