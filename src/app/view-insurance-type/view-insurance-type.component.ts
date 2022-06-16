import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'insuranceType',
  templateUrl: './view-insurance-type.component.html',
  styleUrls: ['./view-insurance-type.component.css']
})
export class ViewInsuranceTypeComponent implements OnInit {
  title:string="View Insurance Type"
  insuranceTypes: any[] = []

  constructor(private insuranceService: InsuranceService) {
    this.getInsuranceTypes();
   }

   getInsuranceTypes(){
    this.insuranceService.getInsuranceTypes().subscribe((result)=>{
      this.insuranceTypes = result
    })
   }

  ngOnInit(): void {
  }

}
