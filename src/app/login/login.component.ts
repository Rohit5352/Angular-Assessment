import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { EmployeeDetailsService } from '../service/employee-details.service';
import { PeriodicElement } from '../employee/employee.component';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   userName: string;
   password: string;
   loginForm: FormGroup;
   ELEMENT_DATA: PeriodicElement[] =[];
   
   constructor(private authService : AuthService, private router : Router,
    private employeeDetailsService: EmployeeDetailsService,) { }

   ngOnInit() {
     this.ELEMENT_DATA=  [
        {id: 1, name: 'Jemes', email:'j@gmail.com', salary: 25000},
        {id: 2, name: 'Harry', email: 'h@gmail.com', salary: 26000},
        {id: 3, name: 'Lious', email: 'l@gmail.com', salary: 29000},
        {id: 4, name: 'Benzile', email:'b@gmail.com', salary: 23000},
        {id: 5, name: 'Boron', email: 'br@gmail.com', salary: 27000},
      ];
      this.loginForm = new FormGroup({
         userName: new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }

   onSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
            this.employeeDetailsService.EmployeeList = this.ELEMENT_DATA;
           if(data) this.router.navigate(['/employee']); 
      });
   }
}