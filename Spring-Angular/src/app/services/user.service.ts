import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  usersSubject = new Subject<User[]>();
  private  users: User[] = [];

  private Url = 'http://localhost:8080/api/user'

  constructor(private httpClient : HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('${this.Url}');
  }

  postUsers(user: User): Observable<HttpResponse<User>>  {
    const headers: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')  

    return this.httpClient.post<User>(this.Url, user, { headers, observe: 'response' });

  }

  // *emitUserSubject() {
  //   this.usersSubject.next(this.usersSubject.slice());
  // }

  getUserById(id: number) {
    const user = this.getUsers().pipe(
      map((data:any)=> data.id)).subscribe()
  }

//   addUser(user: User) {
//     const userObject = {
//       id: 0,
//       lastname: '',
//       firstname: '',
//       email: '',
//       password: ''
//     };
//     userObject.lastname = lastname;
//     userObject.firstname = firstname;
//     userObject.email = email;
//     userObject.password =password;
//     userObject.id= this.users[(this.users.length -1)].id + 1;
//     this.users.push(userObject);
//     this.emitUserSubject();
//   }

//   saveUsersToServer() {
//     this.httpClient
//     .put('http://localhost:8080/api/user', this.users)
//     .subscribe(
//       () => {
//         console.log('Enregistrement terminé !')
//       },
//       (error) => {
//         console.log('Erreur de sauvegarde ! : ' + error);
//       }
//     );
//   }

//   getUsersFromServer() {
//     this.httpClient
//     .get<[]>('http://localhost:8080/api/user')
//     .subscribe(
//       (response) => {
//         this.users = response;
//         this.emitUserSubject();
//       },
//       (error) => {
//         console.log('Erreur de chargement ! ' + error);
//       }
//     );
//   }*/
 }
