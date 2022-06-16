import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

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
  noOfInsuranceAccounts:number=0;
  policyPaymentRecords:number=0;
  policyClaimRecords:number=0;
  commissionRecords:number=0;
  queryRecords:number=0;
  stateRecords:number=0;
  cityRecords:number=0;

  constructor(private adminService: AdminService) {
    this.getEmployeeCounts();
    this.getAgentCounts();
    this.getCustomerCounts();
    this.getInsuranceTypeCounts();
    this.getInsurancePlanCounts();
   }

   getEmployeeCounts(){
    this.adminService.getEmployees().subscribe((result)=>{
      this.noOfEmployees = result.length
    })
   }

  getAgentCounts(){
    this.adminService.getAgents().subscribe((result)=>{
      this.noOfAgents = result.length
    })
  }

  getCustomerCounts(){
    this.adminService.getCustomers().subscribe((result)=>{
      this.noOfCustomers = result.length
    })
  }

  getInsuranceTypeCounts(){
    this.adminService.getInsuranceTypes().subscribe((result)=>{
      this.noOfInsuranceTypes = result.length
    })
  }

  getInsurancePlanCounts(){
    this.adminService.getInsurancePlans().subscribe((result)=>{
      this.noOfInsurancePlans = result.length
    })
  }
  
  ngOnInit(): void {
  }

}
