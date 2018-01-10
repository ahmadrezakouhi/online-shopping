import { Injectable } from "@angular/core";

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Person } from "../model/person";
import { Observable } from "rxjs/Observable";

@Injectable()

export class RegisterService{
 constructor(private http :HttpClient){}   

 register(param):Observable<{}>{

    return this.http.post('http://localhost/php/shopping/register.php',param,
//     {firstName:'احمد'
// ,lastName:'رضا کوهی'
// ,phone:1234
// ,email:'ahmadrezakouhi@gmail'
// ,gender:'مرد'
// ,address:'اصفهان',
// password:'123456'}, 
{
         headers:
             new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
         , observe: 'body', responseType: 'json',
     });

 }
}