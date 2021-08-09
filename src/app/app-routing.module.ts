
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/Guard/auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeEditDetailsComponent } from 'src/app/employee-edit-details/employee-edit-details.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
  //  { path: 'logout', component: LogoutComponent },
   { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
   { path: 'expenses/detail/:id', component: EmployeeComponent, canActivate: [AuthGuard]},
   { path: 'employee-add', component: EmployeeEditDetailsComponent, canActivate: [AuthGuard]},
   { path: 'employee-add/:id', component: EmployeeEditDetailsComponent, canActivate: [AuthGuard]},
   { path: '', redirectTo: 'Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }