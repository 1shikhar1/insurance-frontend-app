import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'empRegistration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  title:string="ADDING EMPLOYEE RECORD";

  exform: any;
  id:any;

  constructor(private service:EmployeeService, private route:Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/admin-login'])
    }
   }

  ngOnInit(): void {
    this.exform=new FormGroup({
      'employeeType':new FormControl(null,Validators.required),
      'name':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
      // 'confirmPassword':new FormControl(null,Validators.required)
     
    });
  }
  

  addEmployee()
  {
    this.service.addEmployee(this.exform.value).subscribe(result=>{
      this.id = result;
      alert("This is your Auto-Generated User-Id: "+this.id.id);
      this.route.navigate(['/admin-dashboard']);
    })
    this.exform.reset();
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
