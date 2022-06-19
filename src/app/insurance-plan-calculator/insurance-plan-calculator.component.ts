import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-insurance-plan-calculator',
  templateUrl: './insurance-plan-calculator.component.html',
  styleUrls: ['./insurance-plan-calculator.component.css']
})
export class InsurancePlanCalculatorComponent implements OnInit {
  insurancePlan:any



  policyTermMin:number = 0
  policyTermMax:number = 0
  minAge:number = 0
  maxAge:number = 0
  minInvestmentAmount: number = 0
  maxInvestmentAmount: number = 0
  profitRatio = 0



  noOfYears: string = "";
  amount: string = "";
  months: string = "";
  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";

  buttonSubmit:boolean=false;

  constructor(private route: Router, private loginService: LoginService, private dataSharingService:DataSharingService) {
    this.insurancePlan = dataSharingService.data;
    console.log(this.insurancePlan)
    this.policyTermMin = this.insurancePlan.policyTermMin;
    this.policyTermMax = this.insurancePlan.policyTermMax;
    this.minAge = this.insurancePlan.minAge;
    this.maxAge = this.insurancePlan.maxAge;
    this.minInvestmentAmount = this.insurancePlan.sumAssuredMin;
    this.maxInvestmentAmount = this.insurancePlan.sumAssuredMax;
    this.profitRatio = this.insurancePlan.profitRatio;
   }

  ngOnInit(): void {
    this.buttonSubmit = this.loginService.isLoggedIn();
  }


  interestCalculator() {
    if (this.months.match("1 month")) {
      this.installAmt = String(Number(this.amount) /(Number(this.noOfYears)* 12));
      this.insterestAmt = String(Number(this.amount) * this.profitRatio / 100);
      this.totalAmt = String(Number(this.amount) + Number(this.amount) *  this.profitRatio / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();

    }
    else if (this.months.match("3 month")) {
      this.installAmt = String(Number(this.amount) / (Number(this.noOfYears)* 4))
      this.insterestAmt = String(Number(this.amount) * this.profitRatio / 100)
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * this.profitRatio / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();
    }
    else if (this.months.match("6 month")) {
      this.installAmt = String(Number(this.amount) /(Number(this.noOfYears)* 2));
      this.insterestAmt = String(Number(this.amount) * this.profitRatio / 100);
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * this.profitRatio / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();
    }
    else if (this.months.match("1 year")) {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYears) * 1);
      
      this.insterestAmt = String(Number(this.amount) * this.profitRatio / 100);
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * this.profitRatio  / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();
    }
  }

   compoundInterestCalculator(principal:number, rate:number, time:number){
    let interest:number = principal * (Math.pow((1 + rate/100), time)) - principal;
   }

   setData(){
    const nowC = new Date();
    const nowM = new Date();
    nowM.setFullYear(nowM.getFullYear()+Number(this.noOfYears));

    this.dataSharingService.data={
      "insurancePlanId": this.insurancePlan.id,
      "insurancePlan": this.insurancePlan.name,
      "noOfYears": this.noOfYears,
      "profitRatio": this.profitRatio,
      "totalInvestmentAmount": this.amount,
      "premiumType": this.months,
      "installmentAmount": this.installAmt,
      "interestAmount": this.insterestAmt,
      "sumAssured":this.totalAmt,
      "dateCreated": nowC.toLocaleDateString(),
      "maturityDate": nowM.toLocaleDateString()

    }
   }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
