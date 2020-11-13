import { User } from './../../model/user';
import { UserService } from './../../service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:User[];
  public userId:number;
  constructor(private router:Router, private apiService: UserService) { }
  ngOnInit() {
    this.apiService.getUsers()
    .subscribe(response => {
      const id=this.apiService.getLoggedUserId();
      this.users = response;
      // this.users=this.users.filter(item=>item.userId!==id);
    }, err => {
    })
  }
userDetail(id:number){
  this.router.navigate(['/details',id]);
}

}
