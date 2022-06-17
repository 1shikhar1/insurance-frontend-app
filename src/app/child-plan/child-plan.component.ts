import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'child-plan',
  templateUrl: './child-plan.component.html',
  styleUrls: ['./child-plan.component.css']
})
export class ChildPlanComponent implements OnInit {

  noOfYear: string = "";
  amount: string = "";
  months: string = "";

  installAmt: string = "";
  insterestAmt: string = "";
  totalAmt: string = "";
  buttonSubmit:boolean=false;
  constructor(private service: LoginService, private route: Router) {
    
   }

  ngOnInit(): void {
    this.buttonSubmit = this.service.isLoggedIn();
  }
  
  interestCalculator() {
    if (this.months.match("1 month")) {
      this.installAmt = String(Number(this.amount) / 12) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      // this.buttonSubmit = this.service.isLoggedIn();

    }
    else if (this.months.match("3 month")) {
      this.installAmt = String(Number(this.amount) / 4) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      // this.buttonSubmit = this.service.isLoggedIn();
    }
    else if (this.months.match("6 month")) {
      this.installAmt = String(Number(this.amount) / 2) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      // this.buttonSubmit = this.service.isLoggedIn();
    }
    else if (this.months.match("1 year")) {
      this.installAmt = String(Number(this.amount) / 1) + ".00";
      this.insterestAmt = String(Number(this.amount) * 6.00 / 100) + ".00";
      this.totalAmt = String(Number(this.amount) + Number(this.amount) * 6.00 / 100) + ".00";
      // this.buttonSubmit = this.service.isLoggedIn();
    }
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
