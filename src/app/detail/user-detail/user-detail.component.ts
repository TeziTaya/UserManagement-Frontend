import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user: User;
  constructor(private route: ActivatedRoute, private apiService: UserService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.apiService.getUser(id)
      .subscribe((response:any) => {
        this.user = response;
      },
        err => {
          console.log(err);
        });
  }

}
