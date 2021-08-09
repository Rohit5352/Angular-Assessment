import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailsService } from '../service/employee-details.service';
// import { Student } from './student-interface';

@Component({
  selector: 'app-employee-edit-details',
  templateUrl: './employee-edit-details.component.html',
  styleUrls: ['./employee-edit-details.component.scss']
})
export class EmployeeEditDetailsComponent  {
  
  employeeForm: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  employeeID = false;

  dataSource: any;
  
  constructor(
    private employeeDetailsService: EmployeeDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ){}
 
  ngOnInit(){
    this.employeeForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      salary: new FormControl(''),
      id: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.id){
          let employee = this.employeeDetailsService.getEmployeeDetails(param.id);
          if(employee){
            this.employeeForm.setValue(employee);
            // this.employeeForm.controls.name.setValue(employee.name)
            // this.employeeForm.controls.email.setValue(employee.email)
            // this.employeeForm.controls.salary.setValue(employee.salary)
            console.log("this.employeeForm",this.employeeForm);
            this.isEdit = true;
            }
        }else{
          this.dataSource = this.employeeDetailsService.getEmployees();
         const newid = this.dataSource.length +1;
         this.employeeForm.controls.id.setValue(newid)
        }
      })
  }

  resetForm(){
    console.log('reset',this.employeeForm)
    this.employeeForm.reset();
  }

  add(){
    if(this.employeeForm.valid){
      console.log("add ",this.employeeForm.value)
      this.employeeDetailsService.EmployeeList.push(this.employeeForm.value);
      this.router.navigate(['/employee']); 
    }
      else {
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    console.log("edit ----> ",this.employeeForm.value)
    if(this.employeeForm.valid){
      if(this.employeeDetailsService.employeeEdit(this.employeeForm.value)){
        this.router.navigate(['/employee']); 
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }
}

