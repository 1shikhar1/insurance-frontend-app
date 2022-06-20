import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FeedbackService } from '../services/feedback.service';

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
  noOfQueries:number=0;
  stateRecords:number=0;
  insuranceSchemeRecords:number=0;
  cityRecords:number=0;

  constructor(private employeeService: EmployeeService, private route: Router,private feedbackService: FeedbackService) {
    let token= localStorage.getItem("token")

    if(token==null){
      this.route.navigate(['/employee-login'])
    }

    this.getEmployeesCount();
    this.getAgentsCount();
    this.getCustomersCount();
    this.getInsuranceTypesCount();
    this.getInsurancePlansCount();
    this.getFeedbackCount();
   }

   getEmployeesCount(){
    this.employeeService.getEmployees().subscribe((result)=>{
      let count:number=0;
      for (let employee of result){
        if(employee.deleted==false){
          count++;
        }
      }
      this.noOfEmployees = count;
    })
   }

   getAgentsCount(){
    this.employeeService.getAgents().subscribe((result)=>{
      let count:number=0;
      for (let agent of result){
        if(agent.deleted==false){
          count++;
        }
      }
      this.noOfAgents = count;
    })
   }

   getCustomersCount(){
    this.employeeService.getCustomers().subscribe((result)=>{
      let count:number=0;
      for (let customer of result){
        if(customer.deleted==false){
          count++;
        }
      }
      this.noOfCustomers = count;
    })
   }

   getInsuranceTypesCount(){
    this.employeeService.getInsuranceTypes().subscribe((result)=>{
      let count:number=0;
      for (let insuranceType of result){
        if(insuranceType.deleted==false){
          count++;
        }
      }
      this.noOfInsuranceTypes = count;
    })
   }

   getInsurancePlansCount(){
    this.employeeService.getInsurancePlans().subscribe((result)=>{
      let count:number=0;
      for (let insurancePlan of result){
        if(insurancePlan.deleted==false){
          count++;
        }
      }
      this.noOfInsurancePlans = count;
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  getFeedbackCount(){
    this.feedbackService.getFeedback().subscribe((result)=>{
      let count:number=0;
      for (let feedback of result){
        if(feedback.deleted==false){
          count++;
        }
      }
      this.noOfQueries = count;
    })
    }

}
