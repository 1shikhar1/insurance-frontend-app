import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-types',
  templateUrl: './insurance-types.component.html',
  styleUrls: ['./insurance-types.component.css']
})
export class InsuranceTypesComponent implements OnInit {

  insuranceTypes:any[]=[]
  insurancePlans:any[]=[]
  showPlan:boolean=false;

  constructor(private insuranceService: InsuranceService, private dataSharingService: DataSharingService,
    private route:Router) {
    this.getInsuranceTypes();
    this.getInsurancePlans();
    this.showPlan = this.insuranceService.isLoggedIn();
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

  setData(data:any){
    this.dataSharingService.data = data;
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
