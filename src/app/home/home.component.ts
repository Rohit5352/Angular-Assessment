import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(data=>{
      console.log("-------->res",data);
    })
  }
}
