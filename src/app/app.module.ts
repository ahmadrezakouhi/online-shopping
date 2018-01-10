import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";



import { AppComponent } from './app.component';
import { NotFoundModule } from "./page-not-found/not-found/not-found.module";
import { RoutingAppModule } from "./routing-app.module";
import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";
import { DetailsModule } from "./details/details.module";

import { CartCenterModule } from "./cart-center/cart-center.module";
import { AuthService } from "./service/auth.service";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
 
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HomeModule,
    AboutModule,
    RoutingAppModule,
    LoginModule,
    RegisterModule,
DetailsModule,
CartCenterModule,
AdminModule,
    NotFoundModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
