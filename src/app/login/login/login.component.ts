import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean
  constructor(private router: Router, private http: HttpClient,private spinner:NgxSpinnerService) { }
  public login = (form: NgForm) => {
    this.spinner.show();
    const credientials = JSON.stringify(form.value);
    this.http.post('https://localhost:44356/api/ManageUser/authenticate', credientials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['/']);
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      
    }, err => {
      this.invalidLogin = true;
      this.spinner.hide();
    })
  }
}
