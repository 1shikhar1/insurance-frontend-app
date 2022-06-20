import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { CustomerService } from '../services/customer.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  username:string="admin";
  noOfAgents:number=0;
  noOfEmployees:number=0;
  noOfCustomers:number=0;
  customerDocRecords:number=0;
  noOfInsuranceTypes:number=0;
  noOfInsurancePlans:number=0;
  noOfPolicies:number=0;
  noOfpolicyPayments:number=0;
  policyClaimRecords:number=0;
  noOfAgentCommissions:number=0;
  noOfQueries:number=0;
  stateRecords:number=0;
  cityRecords:number=0;
  

  constructor(private adminService: AdminService, private route: Router,private feedbackService: FeedbackService) {

    let token= localStorage.getItem("token")

    if(token==null){
      this.route.navigate(['/admin-login'])
    }

    this.getEmployeeCounts();
    this.getAgentCounts();
    this.getCustomerCounts();
    this.getInsuranceTypeCounts();
    this.getInsurancePlanCounts();
    this.getFeedbackCount();
    this.getPolicyCounts();
    this.getCustomertransactions();
    this.getAgenttransactions();
   }

   getAgenttransactions(){
    this.adminService.getAgentTransactions().subscribe((result)=>{
      this.noOfAgentCommissions = result.length
    })
   }

   getCustomertransactions(){
    this.adminService.getCustomerTransactions().subscribe((result)=>{
      this.noOfpolicyPayments = result.length
    })
   }

   getPolicyCounts(){
    this.adminService.getPolicies().subscribe((result)=>{
      this.noOfPolicies = result.length;
    })
   }

   getEmployeeCounts(){
    this.adminService.getEmployees().subscribe((result)=>{
      let count:number=0;
      for (let employee of result){
        if(employee.deleted==false){
          count++;
        }
      }
      this.noOfEmployees = count;
    })
   }

  getAgentCounts(){
    this.adminService.getAgents().subscribe((result)=>{
      let count:number=0;
      for (let agent of result){
        if(agent.deleted==false){
          count++;
        }
      }
      this.noOfAgents = count;
    })
  }

  getCustomerCounts(){
    this.adminService.getCustomers().subscribe((result)=>{
      let count:number=0;
      for (let customer of result){
        if(customer.deleted==false){
          count++;
        }
      }
      this.noOfCustomers = count;
    })
  }

  getInsuranceTypeCounts(){
    this.adminService.getInsuranceTypes().subscribe((result)=>{
      let count:number=0;
      for (let insuranceType of result){
        if(insuranceType.deleted==false){
          count++;
        }
      }
      this.noOfInsuranceTypes = count;
    })
  }

  getInsurancePlanCounts(){
    this.adminService.getInsurancePlans().subscribe((result)=>{
      let count:number=0;
      for (let insurancePlan of result){
        if(insurancePlan.deleted==false){
          count++;
        }
      }
      this.noOfInsurancePlans = count;
    })
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

  ngOnInit(): void {
  }

}
