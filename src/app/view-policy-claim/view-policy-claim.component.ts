import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewPolicyClaim',
  templateUrl: './view-policy-claim.component.html',
  styleUrls: ['./view-policy-claim.component.css']
})
export class ViewPolicyClaimComponent implements OnInit {
  title:string = "Policy Claim Record"
  customerName : string = "";
  insuranceAccountNo: string = "";
  withdrawalDate: string = "";
  bankDetails:string = "";
  withdrawalAmount:string="";
  withdrawalStatus:string = "";
  action = "";

  constructor(private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/app-home'])
    } }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
