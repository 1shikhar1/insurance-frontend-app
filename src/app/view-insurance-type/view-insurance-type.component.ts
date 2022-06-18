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
  activateInsuranceType(id:number){
    this.insuranceService.activateInsuranceType(id).subscribe((result)=>{
     
    })
    window.location.href="insuranceType";
  }
  
  deactivateInsuranceType(id:number){
    this.insuranceService.deactivateInsuranceType(id).subscribe((result)=>{
      
    })
    window.location.href="insuranceType";
  }

  deleteInsuranceTypeById(id:number){
    this.insuranceService.deleteInsuranceTypeById(id).subscribe((result)=>{
      
    })
    window.location.href="insuranceType";
  }


}
