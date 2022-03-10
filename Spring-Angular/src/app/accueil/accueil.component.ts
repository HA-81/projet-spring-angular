import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  firstname: User[] = [];
  active = true;
  
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  goToUser() {
    this.route.navigate(["/auth"]);
  }

}
