import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "../../service/auth.service";

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService){

  }
  
  
  canActivate(){
  return this.authService.isAdmin;
  }
}
