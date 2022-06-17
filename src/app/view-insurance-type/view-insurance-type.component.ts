import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'insuranceType',
  templateUrl: './view-insurance-type.component.html',
  styleUrls: ['./view-insurance-type.component.css']
})
export class ViewInsuranceTypeComponent implements OnInit {
  title:string="View Insurance Type"
  insuranceTypes: any[] = []

  constructor(private insuranceService: InsuranceService, private route: Router) {
    this.getInsuranceTypes();
   }

   getInsuranceTypes(){
    this.insuranceService.getInsuranceTypes().subscribe((result)=>{
      this.insuranceTypes = result
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
