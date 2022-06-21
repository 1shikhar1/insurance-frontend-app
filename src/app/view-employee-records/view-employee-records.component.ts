import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'empRecords',
  templateUrl: './view-employee-records.component.html',
  styleUrls: ['./view-employee-records.component.css']
})
export class ViewEmployeeRecordsComponent implements OnInit {
  title:string="Employee Records"
  employees: any[] = [];
  

  constructor(private employeeService: EmployeeService, private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/app-home'])
    }
    this.getEmployees();
   }

   getEmployees(){
    this.employeeService.getEmployees().subscribe((result)=>{
      this.employees = result
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  activateEmployee(id:number){
    this.employeeService.activateEmployee(id).subscribe((result)=>{
     
    })
    window.location.href="empRecords";
  }
  
  deactivateEmployee(id:number){
    this.employeeService.deactivateEmployee(id).subscribe((result)=>{
      
    })
    window.location.href="empRecords";
  }
  
  deleteEmployeeById(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe((result)=>{
      
    })
    window.location.href="empRecords";
  }
 
}
