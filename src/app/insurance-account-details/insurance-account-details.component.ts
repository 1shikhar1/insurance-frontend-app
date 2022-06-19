import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-insurance-account-details',
  templateUrl: './insurance-account-details.component.html',
  styleUrls: ['./insurance-account-details.component.css']
})
export class InsuranceAccountDetailsComponent implements OnInit {
  referral:any
  insurancePlanId:any
  insurancePlan:any
  noOfYears:any
  profitRatio:any
  totalInvestmentAmount:any
  premiumType:any
  installmentAmount:any
  interestAmount:any
  sumAssured:any
  dateCreated:any
  maturityDate:any



  title:string="Insurance Account (Policy) details";
  constructor(private route: Router, private dataSharingService:DataSharingService) { 
    let data = dataSharingService.data;

    this.insurancePlanId = data.insurancePlanId;
    this.insurancePlan = data.insurancePlan;
    this.noOfYears = data.noOfYears;
    this.profitRatio = data.profitRatio;
    this.totalInvestmentAmount = data.totalInvestmentAmount;
    this.premiumType = data.premiumType;
    this.installmentAmount = data.installmentAmount;
    this.interestAmount = data.interestAmount;
    this.sumAssured = data.sumAssured;
    this.dateCreated = data.dateCreated;
    this.maturityDate = data.maturityDate;

  }

  ngOnInit(): void {
  }

  sendData(){
    this.dataSharingService.data = {
      "agentId": this.referral,
      "insurancePlanId": this.insurancePlanId,
      "insurancePlan": this.insurancePlan,
      "noOfYears": this.noOfYears,
      "profitRatio": this.profitRatio,
      "totalInvestmentAmount": this.totalInvestmentAmount,
      "premiumType": this.premiumType,
      "installmentAmount": this.installmentAmount,
      "interestAmount": this.interestAmount,
      "sumAssured": this.sumAssured,
      "dateCreated": this.dateCreated,
      "maturityDate": this.maturityDate
    }
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
