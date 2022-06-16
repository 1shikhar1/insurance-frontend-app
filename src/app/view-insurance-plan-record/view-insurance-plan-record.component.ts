import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'viewInsurancePlan',
  templateUrl: './view-insurance-plan-record.component.html',
  styleUrls: ['./view-insurance-plan-record.component.css']
})
export class ViewInsurancePlanRecordComponent implements OnInit {
  title:string="Insurance Plans"
  insurancePlans: any[] = []


  constructor(private insuranceService: InsuranceService) {
    this.getInsurancePlans();
   }

   getInsurancePlans(){
    this.insuranceService.getInsurancePlans().subscribe((result)=>{
      this.insurancePlans = result
    })
   }

  ngOnInit(): void {
  }

}
