import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'view-insurance-account-detail',
  templateUrl: './view-insurance-account-detail.component.html',
  styleUrls: ['./view-insurance-account-detail.component.css']
})
export class ViewInsuranceAccountDetailComponent implements OnInit {
  title:string = "Poliices Details"

  policies:any = []

  constructor(private route : Router, private policyService: PolicyService) {
    this.setData();
   }

   setData(){
    this.policyService.getPolicies().subscribe((result)=>{
      this.policies = result;
      console.log(result)
    })
  }


  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
