import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';


@Component({
  selector: 'addInsurancePlan',
  templateUrl: './adding-insurance-plan.component.html',
  styleUrls: ['./adding-insurance-plan.component.css']
})
export class AddingInsurancePlanComponent implements OnInit {
  title:string="Adding Insurance Plan";

  id:any
  insuranceTypes:any[]=[]
 
  constructor(private route: Router, private insuranceService:InsuranceService) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/admin-login'])
    }
    this.getInsuranceTypes();
   }

  ngOnInit(): void {
  }

  getInsuranceTypes(){
    this.insuranceService.getInsuranceTypes().subscribe((result)=>{
      this.insuranceTypes = result;
    })
  }

  onSubmit(data:any)
  {
   
   console.log(data)
   console.log(this.id)
   this.insuranceService.addInsurancePlan(Number(this.id), data).subscribe(resp=>{
    console.log(resp)
    alert("plan added")
    this.route.navigate(['/admin-dashboard'])
   })
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
 

