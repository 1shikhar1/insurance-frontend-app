import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-types',
  templateUrl: './insurance-types.component.html',
  styleUrls: ['./insurance-types.component.css']
})
export class InsuranceTypesComponent implements OnInit {

  insuranceTypes:any[]=[]
  insurancePlans:any[]=[]

  constructor(private insuranceService: InsuranceService) {
    this.getInsuranceTypes();
    this.getInsurancePlans();
   }

  ngOnInit(): void {
  }

  getInsuranceTypes(){
    this.insuranceService.getInsuranceTypes().subscribe((result)=>{
      console.log(result)
      this.insuranceTypes = result;
    })
  }

  getInsurancePlans(){
    this.insuranceService.getInsurancePlans().subscribe((result)=>{
      this.insurancePlans = result;
    })
  }
}
