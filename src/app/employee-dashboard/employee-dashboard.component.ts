import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  username:string="employee";
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

  constructor() { }

  ngOnInit(): void {
  }

}
