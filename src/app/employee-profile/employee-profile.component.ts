import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  title:string="Employee Details"
  employee:any={};
  constructor(private employeeService: EmployeeService, private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/employee-login'])
    }
    
    this.getEmployeeById();
   }

  ngOnInit(): void {
  }

  getEmployeeById(){
    let id:any;
    id = localStorage.getItem("userId");
    let idd:number= +id;
    this.employeeService.getEmployeeById(idd).subscribe((result)=>{
      console.log(result)
      this.employee=result;
      
    })
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

 

}
