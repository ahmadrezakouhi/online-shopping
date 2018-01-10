import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChangePasswordService{
    constructor(
        private http:HttpClient
    ){

    }
    changePassword(param):Observable<any>{
        return this.http.post('http://localhost/php/shopping/change-password.php',param,
            {
                headers:
                    new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                , observe: 'body', responseType: 'json',
            }

)
    }
}