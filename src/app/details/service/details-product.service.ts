import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DetailsProductService {
    constructor(
        private http:HttpClient
    ){

    }

    getProductId(findId:number):Observable<any>{
        return  this.http.post('http://localhost/php/shopping/find-product.php', { id: findId }, {
            headers:
                new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            , observe: 'body', responseType: 'json',
        });

  
    }
    getProductComments(findId:number):Observable<any>{
        return  this.http.post('http://localhost/php/shopping/comment.php', { id: findId }, {
            headers:
                new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            , observe: 'body', responseType: 'json',
        });

  
    }

    buyProduct(param){
        return this.http.post('http://localhost/php/shopping/add-to-cart.php', param, {
            headers:
                new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            , observe: 'body', responseType: 'json',
        });
    }
}