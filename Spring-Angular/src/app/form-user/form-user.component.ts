import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface'
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  user:User={lastname:'',firstname:'',email:'',password:''}
  users: User[] =[];
  userForm! : FormGroup;

  constructor(private usersService: UsersService, private router : Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

initForm() {
  this.userForm = this.formBuilder.group({
  lastname: ['',Validators.required],
  firstname: ['',Validators.required],
  email : ['', [Validators.required, Validators.email]],
  password : new FormControl('',Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
  }) 

}

  onSubmitForm() {
    const formValue = this.userForm.value;
    const lastName = formValue['lastname']
    const firstName = formValue['firstname']
    const Email = formValue['email']
    const Password = formValue['password']
    this.user={lastname:lastName, firstname:firstName, email:Email,password:Password}
    this.usersService.addUser(this.user);
    this.router.navigate(['/userlist']);
  }

  
}
