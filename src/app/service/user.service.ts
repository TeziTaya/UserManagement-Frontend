import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public apiUrl:string='https://localhost:44356/api/ManageUser';
public userId:number;
public userName:string;
  constructor(private http:HttpClient,private jwtHelper:JwtHelperService) {
    const token:string=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      this.userId=parseInt(this.jwtHelper.decodeToken(token).Id);
      this.userName=this.jwtHelper.decodeToken(token).Name;
    }
}
  public getUsers(){
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  public createUser(user:User){
  return this.http.post(`${this.apiUrl}/register`,user);
  }
  public getUser(id){
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  public getLoggedUserId(){
    return this.userId;
  }
}
