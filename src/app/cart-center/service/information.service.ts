import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";



@Injectable()
export class InformationService {
   public person: Observable<{}>;

    constructor(
        private http: HttpClient
    ) {
   

    }

    getInformation(param): Observable<{}> 
    {
       return  this.http.post("http://localhost/php/shopping/personal-information.php", param,
            {
                headers:
                    new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                , observe: 'body', responseType: 'json',
            })
    }
}