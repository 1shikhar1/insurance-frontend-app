import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewPolicyClaim',
  templateUrl: './view-policy-claim.component.html',
  styleUrls: ['./view-policy-claim.component.css']
})
export class ViewPolicyClaimComponent implements OnInit {
  title:string = "View Policy Claim Record"
  customerName : string = "";
  insuranceAccountNo: string = "";
  withdrawalDate: string = "";
  bankDetails:string = "";
  withdrawalAmount:string="";
  withdrawalStatus:string = "";
  action = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
