import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'view-insurance-account-detail',
  templateUrl: './view-insurance-account-detail.component.html',
  styleUrls: ['./view-insurance-account-detail.component.css']
})
export class ViewInsuranceAccountDetailComponent implements OnInit {
  title:string = "View Insurance Account Details"
  accountNo : string = "";
  insuranceType: string = "";
  insuranceScheme: string = "";
  dateCreate:string = "";
  maturityDate:string="";
  premiumType:string = "";
  totalPremiumAmount = "";
  profitRatio:string="";
  sumAssured:string="";
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
