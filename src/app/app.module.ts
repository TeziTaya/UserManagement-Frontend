import { UserService } from './service/user.service';
import { UserComponent } from './user/user/user.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register/register.component';
import { UserDetailComponent } from './detail/user-detail/user-detail.component';
import {NgxSpinnerModule} from 'ngx-spinner';
export function tokenGetter(){
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'details/:id',component:UserDetailComponent},
      {path:'users',component:UserComponent,canActivate:[AuthGuardService]},
      {path:'',redirectTo:'/users',pathMatch:'full'},
      {path:'**', redirectTo:'/users', pathMatch:'full'}
    ]),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        whitelistedDomains:["localhost:44356"],
        blacklistedRoutes:[]
      }
    })
  ],
  providers: [AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
