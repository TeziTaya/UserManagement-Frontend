import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userName:string;
  constructor(private jwtHelper:JwtHelperService,private router:Router) {

   }
  
  ngOnInit() {
  }
  isUserAuthenticated(){
    const token:string=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
    this.userName =this.jwtHelper.decodeToken(token).Name;
      return true;
    }
    return false;
  }
  logOut(){
  localStorage.removeItem("jwt");
  this.router.navigate(['login']);
}
}
