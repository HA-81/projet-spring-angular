import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  lastname : string ='';
  firstname : string ='';

  //user : User = {lastname:'',firstname:'',email:'',password:''}

  constructor(private userService : UserService, private route : ActivatedRoute) { }

  ngOnInit(): void {
  
    const id = this.route.snapshot.params['id'];
    //this.lastname=this.userService.getLastName(+id)!.lastname;
    //this.firstname=this.userService.getFirstName(+id)!.firstname;
  }

}
