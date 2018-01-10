import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from "./service/change-password.service";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  showModalDanger = 'none';
  showModalOk = 'none';
 old_password:string='';
  new_password: string = '';
  repeat_new_password:string='';


  
  constructor(
    private changePasswordService:ChangePasswordService
  ) { }

  ngOnInit() {
  }
change(){
  this.changePasswordService.changePassword(
    {
      oldPassword:this.old_password,
  newPassword:this.new_password,
repeatNewPassword:this.repeat_new_password,
memberId:localStorage.getItem('id')}).subscribe(
  res=>{
    console.log(res)
    if (res['answer']) {

      this.showModalOk = 'block';
      setTimeout(
        () => this.showModalOk = 'none', 2000
      )
    }
    else {
      this.showModalDanger = 'block';
      setTimeout(
        () => this.showModalDanger = 'none', 2000
      )
    }
  }
)
}

 
}
