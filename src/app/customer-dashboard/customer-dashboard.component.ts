import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
username:string="user";
insuranceTypes:any[]=[];
title:string="Customer Dashboard"
  constructor(private route: Router,private insuranceService: InsuranceService) {
    let token= localStorage.getItem("token")

    if(token==null){
      this.route.navigate(['/customer-login'])
    }

    this.getInsuranceTypes();
   }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  getInsuranceTypes() {
    this.insuranceService.getInsuranceTypes().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.insuranceTypes.push(el)
      })
    })
  }

customerLogout(){
  localStorage.clear();
  this.route.navigate(['/app-home'])
}

}
