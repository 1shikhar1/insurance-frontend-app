import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'empRecords',
  templateUrl: './view-employee-records.component.html',
  styleUrls: ['./view-employee-records.component.css']
})
export class ViewEmployeeRecordsComponent implements OnInit {
  title:string="View Employee Records"
  employees: any[] = []

  constructor(private employeeService: EmployeeService, private route: Router) {
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
}
