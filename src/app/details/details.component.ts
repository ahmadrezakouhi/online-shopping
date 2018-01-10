import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router,ActivatedRoute,ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { DetailsProductService } from "./service/details-product.service";
import { Format } from "../format/format";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  showModalDanger='none';
  showModalOk='none';
product:Observable<any[]>;
f= new Format();

  constructor(
    private route:ActivatedRoute,
    private router:Router,
  private detailsProductService : DetailsProductService,

  
  ) { }
  ngOnInit(){
  // this.detailsProductService.getProductId(1).subscribe(
  //   res=>this.p=res[0]
  // )
  this.setStar(4,this.stars,true);
 this.route.paramMap.switchMap((params:ParamMap)=>
this.detailsProductService.getProductId(+params.get('id'))).subscribe
(res=>{

  this.product=res

}
)

  
  }


  buy(pId:number){
if(localStorage.getItem('id')===null){

  this.router.navigate(['/login']);
  return ;

}
this.detailsProductService.buyProduct({productId:pId,memberId:localStorage.getItem('id')}).subscribe(
  res=>{

    if(res['answer']){

      this.showModalOk='block';
      setTimeout(
        ()=>this.showModalOk='none',2000
      )
    }
    else{
      this.showModalDanger='block';
      setTimeout(
        ()=>this.showModalDanger='none',2000
      )
    }
  }
)
  }




  stars:boolean[]=[false,false,false,false,false];

 setStar(number,array:boolean[],b:boolean){
for(let i = 0;i<number;i++){
  array[i]=b;
}
 }

rate:number=1;
  rateArray: boolean[] = [true, false, false, false, false];
 yourRating(number){
   this.setStar(5,this.rateArray,false);
   this.setStar(number,this.rateArray,true);
this.rate=number;
 }










}
















