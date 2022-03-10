import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FormUserComponent } from './form-user/form-user.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: "inscription", component : FormUserComponent },
  { path: "user/:id", canActivate: [AuthGuardService], component : UserCardComponent },
  { path: "userList", canActivate: [AuthGuardService], component : UserListComponent },
  { path: "auth", component : AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
