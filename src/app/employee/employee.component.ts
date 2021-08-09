import { Component, OnInit, NgZone } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDetailsService } from '../service/employee-details.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { getMaxListeners } from 'process';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent  {
  
  displayedColumns = ['id', 'name', 'email', 'salary', 'option'];
  // dataSource = ELEMENT_DATA;
  dataSource;
  constructor(
    private employeeDetailsService: EmployeeDetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ){
    this.dataSource = this.employeeDetailsService.getEmployees();
  }

  deleteEmployee(id){
      if(id){
        this.employeeDetailsService.deleteEmployee(id)
      

        this.ngZone.run( ()=>{
          this.dataSource = this.employeeDetailsService.getEmployees();
          console.log("this.dataSource  ----> ", this.dataSource)
          this.getdata()
          // this.router.navigate(['/employee']); 
        })
       
      }
    
  }
  getdata(){
    this.dataSource = this.employeeDetailsService.getEmployees();
  }
  
}

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  salary: number;
  
}





/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */