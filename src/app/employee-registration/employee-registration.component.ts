import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empRegistration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  title:string="ADDING EMPLOYEE RECORD";
  emp_type:string="";
  emp_name:string="";
  loginId:string="";
  password:string="";
  confirmPassword:string="";
  status:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    let data={
      "emp_type":this.emp_type,
      "emp_name":this.emp_name,
      "loginId": this.loginId,
      "password":this.password,
      "confirmPassword":this.confirmPassword,
      "status":this.status,
    }
  //  this.service.addEmployee(data);
  }
}
