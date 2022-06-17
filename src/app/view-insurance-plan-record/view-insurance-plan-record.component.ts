import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'viewInsurancePlan',
  templateUrl: './view-insurance-plan-record.component.html',
  styleUrls: ['./view-insurance-plan-record.component.css']
})
export class ViewInsurancePlanRecordComponent implements OnInit {
  title:string="Insurance Plans"
  insurancePlans: any[] = []


  constructor(private insuranceService: InsuranceService,private route: Router) {
    this.getInsurancePlans();
   }

   getInsurancePlans(){
    this.insuranceService.getInsurancePlans().subscribe((result)=>{
      this.insurancePlans = result
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
