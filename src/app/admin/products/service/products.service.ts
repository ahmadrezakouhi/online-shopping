import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductsService {
    constructor(
        private http:HttpClient
    ) {}
         getProducts():Observable<any>{
                 return this.http.get('http://localhost/php/shopping/admin/products.php');
    
         }   

         deleteItem(param):Observable<any>{
return this.http.post("http://localhost/php/shopping/admin/delete-product-item.php",param,

    {
        headers:
            new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        , observe: 'body', responseType: 'json',
    })
         }


         addItem(param):Observable<any>{
             return this.http.post("http://localhost/php/shopping/admin/add-product-item.php", param,

                 {
                     headers:
                         new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                     , observe: 'body', responseType: 'json',
                 })
         }

         updateItem(param){
             return this.http.post("http://localhost/php/shopping/admin/update-product-item.php", param,

                 {
                     headers:
                         new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                     , observe: 'body', responseType: 'json',
                 })
         }
         }
