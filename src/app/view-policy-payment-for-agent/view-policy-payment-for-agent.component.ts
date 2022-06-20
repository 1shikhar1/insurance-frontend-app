import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'viewPolicyPay',
  templateUrl: './view-policy-payment-for-agent.component.html',
  styleUrls: ['./view-policy-payment-for-agent.component.css']
})
export class ViewPolicyPaymentForAgentComponent implements OnInit {
  title:string = "View Policy Payment"

  customerTransactions:any[] = []

  constructor(private route: Router, private customerService:CustomerService) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/app-home'])
    }
    this.getCustomertransactions();
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  getCustomertransactions(){
    this.customerService.getCustomerTransactions().subscribe((result)=>{
      this.customerTransactions = result;
      console.log(result)
    })
  }
  
}
