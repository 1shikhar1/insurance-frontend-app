import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  username:string="employee";

  noOfAgents:number=0;
  noOfEmployees:number=0;
  noOfCustomers:number=0;
  customerDocRecords:number=0;
  noOfInsuranceTypes:number=0;
  noOfInsurancePlans:number=0;
  insuranceAccountRecords:number=0;
  policyPaymentRecords:number=0;
  policyClaimRecords:number=0;
  commissionRecords:number=0;
  queryRecords:number=0;
  stateRecords:number=0;
  insuranceSchemeRecords:number=0;
  cityRecords:number=0;

  constructor(private employeeService: EmployeeService, private route: Router) {
    this.getEmployeesCount();
    this.getAgentsCount();
    this.getCustomersCount();
    this.getInsuranceTypesCount();
    this.getInsurancePlansCount();
   }

   getEmployeesCount(){
    this.employeeService.getEmployees().subscribe((result)=>{
      this.noOfEmployees = result.length
    })
   }

   getAgentsCount(){
    this.employeeService.getAgents().subscribe((result)=>{
      this.noOfAgents = result.length
    })
   }

   getCustomersCount(){
    this.employeeService.getCustomers().subscribe((result)=>{
      this.noOfCustomers = result.length
    })
   }

   getInsuranceTypesCount(){
    this.employeeService.getInsuranceTypes().subscribe((result)=>{
      this.noOfInsuranceTypes = result.length
    })
   }

   getInsurancePlansCount(){
    this.employeeService.getInsurancePlans().subscribe((result)=>{
      this.noOfInsurancePlans = result.length
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
