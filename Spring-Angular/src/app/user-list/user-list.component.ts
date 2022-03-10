import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /*users: User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data : User[]) => {
      console.log(data);
      this.users = data;
    });
  }*/

  isAuth = false;
  users: any[] = [];
  userSubscription!: Subscription;


  lastUpdate = new Promise((resolve, rejects) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor (private userService : UserService) {
    setTimeout (
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.usersSubject.subscribe(
      (appareils: any[]) => {
        this.users=this.users;
      }
    );

  }


}
