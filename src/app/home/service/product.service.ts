import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { products } from "../../shared/products";
@Injectable()
export class ProductService{
constructor(private http:HttpClient){

}
getProducts():Observable<any>{
   return  this.http.get('http://localhost/php/shopping/home.php');
}

search(param):Observable<any>{
    return this.http.post('http://localhost/php/shopping/search.php', param, {
        headers:
            new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        , observe: 'body', responseType: 'json',
    });
}
}