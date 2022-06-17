import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-agent-insurance-account',
  templateUrl: './view-agent-insurance-account.component.html',
  styleUrls: ['./view-agent-insurance-account.component.css']
})
export class ViewAgentInsuranceAccountComponent implements OnInit {
  title:string = "View Insurance Account Details"
  customer: string="";
  accountNo : string = "";
  insuranceType: string = "";
  insuranceScheme: string = "";
  dateCreate:string = "";
  maturityDate:string="";
  premiumType:string = "";
  totalPremiumAmount = "";
  profitRatio:string="";
  sumAssured:string="";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
