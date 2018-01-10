import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class CartService{
constructor(
    private http:HttpClient
){

}
getCarts():Observable<any>{
  return  this.http.post("http://localhost/php/shopping/cart.php",{id:localStorage.getItem('id')},

        {
            headers:
                new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            , observe: 'body', responseType: 'json',
        })
}

removeItem(param):Observable<any>{
    return this.http.post("http://localhost/php/shopping/delete-item-from-cart.php", param,

        {
            headers:
                new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            , observe: 'body', responseType: 'json',
        })
}
}