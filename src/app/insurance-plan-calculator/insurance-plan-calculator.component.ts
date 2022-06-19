import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-insurance-plan-calculator',
  templateUrl: './insurance-plan-calculator.component.html',
  styleUrls: ['./insurance-plan-calculator.component.css']
})
export class InsurancePlanCalculatorComponent implements OnInit {

  policyTermMin:number = 0
  policyTermMax:number = 0
  minAge:number = 0
  maxAge:number = 0
  minInvestmentAmount: number = 0
  maxInvestmentAmount: number = 0
  profitRatio = 0



  noOfYear: string = "";
  amount: string = "";
  months: string = "";
  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";
  buttonSubmit:boolean=false;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.buttonSubmit = this.loginService.isLoggedIn();
  }


  interestCalculator() {
    if (this.months.match("1 month")) {
      this.installAmt = String(Number(this.amount) / 12);
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100);
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();

    }
    else if (this.months.match("3 month")) {
      this.installAmt = String(Number(this.amount) / 4)
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100)
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();
    }
    else if (this.months.match("6 month")) {
      this.installAmt = String(Number(this.amount) / 2);
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100);
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();
    }
    else if (this.months.match("1 year")) {
      this.installAmt = String(Number(this.amount) / Number(this.noOfYear) * 1);
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100);
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100);
      this.buttonSubmit = this.loginService.isLoggedIn();
    }
  }


  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
