import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../services/services/admin.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  username:string="admin";
  agentRecords:number=0;
  employeeRecords:number=0;
  customerRecords:number=0;
  customerDocRecords:number=0;
  insuranceTypeRecords:number=0;
  insurancePlanRecords:number=0;
  insuranceAccountRecords:number=0;
  policyPaymentRecords:number=0;
  policyClaimRecords:number=0;
  commissionRecords:number=0;
  queryRecords:number=0;
  stateRecords:number=0;
  insuranceSchemeRecords:number=0;
  cityRecords:number=0;


  constructor(private adminService: AdminService) {
    this.getAllCustomersCount()
    this.getAllAgentCount()
   }

   getAllCustomersCount(){
    this.adminService.getAllCustomers().subscribe((result)=>{
      this.customerRecords = result.length
    })
   }

   getAllAgentCount(){
    this.adminService.getAllAgents().subscribe((result)=>{
      this.agentRecords = result.length
    })
   }


  
  ngOnInit(): void {
  }


}
