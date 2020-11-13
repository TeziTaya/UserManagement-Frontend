import { UserService } from './../../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
public user:User;
  constructor(private router: Router, private apiSevice: UserService) { }
  register(form){
    debugger;
    this.apiSevice.createUser(form.value).subscribe(result=>{
      this.router.navigate(['login']);
    },
    err=>{
   console.log(err);
    });
  }
}
