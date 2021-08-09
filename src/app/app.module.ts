import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
// import { Angula } from '@angular/material';
import { MatTableModule } from '@angular/material/table'  
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsService } from './service/employee-details.service';
import { EmployeeEditDetailsComponent } from './employee-edit-details/employee-edit-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeEditDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule , 
    AuthModule,
    HttpClientModule,
    MatTableModule

    ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
