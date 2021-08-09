import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from 'src/app/employee/employee.component';


@Injectable()
export class EmployeeDetailsService {

  EmployeeList : PeriodicElement[] = [];

  constructor(private http: HttpClient) {
    // this.EmployeeList = [
    //   {id: 1, name: 'Jemes', email:'j@gmail.com', salary: 25000},
    //   {id: 2, name: 'Harry', email: 'h@gmail.com', salary: 26000},
    //   {id: 3, name: 'Lious', email: 'l@gmail.com', salary: 29000},
    //   {id: 4, name: 'Benzile', email:'b@gmail.com', salary: 23000},
    //   {id: 5, name: 'Boron', email: 'br@gmail.com', salary: 27000},
    // ];
  }
  getEmployees(){
    
    return this.EmployeeList;
  }
  getEmployeeDetails(id){
    console.log("idd", id)
    let employee:PeriodicElement;
    this.EmployeeList.map(val=>{
      if(val.id == id) employee = val;
    });
    console.log("employee", employee)
    return employee;
  }
  employeeEdit(employee){
    let present: Boolean = false;
    this.EmployeeList.map((val, index)=>{
      if(val.id == employee.id) {
        
        this.EmployeeList[index] = employee;present=true
      }
    });
    return present;
  }
  deleteEmployee(employee){
    let present: Boolean = false;
    this.EmployeeList.map((val, index)=>{
      if(val.id == employee) {
        this.EmployeeList.splice(index, 1);
        this.EmployeeList =  this.EmployeeList
        console.log("-------------->", this.EmployeeList)
      }
    });
    this.getEmployees()
    return present;
    
  }

}

