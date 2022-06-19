import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-policy-payment',
  templateUrl: './policy-payment.component.html',
  styleUrls: ['./policy-payment.component.css']
})
export class PolicyPaymentComponent implements OnInit {

  title:string="POLICY PAYMENT";

  amount:any
  paymentType:any
  cardHolder:any
  cardNumber:any
  cvvNumber:any
  expiryDate:any

  constructor(private route: Router, private dataSharingService: DataSharingService, private policyService:PolicyService) {
    this.amount = dataSharingService.data.installmentAmount;
   }

  ngOnInit(): void {
  }
 
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  pay(){
    let data = {
      "insurancePlanId": Number(this.dataSharingService.data.insurancePlanId),
      "customerId": Number(localStorage.getItem("userId")),
      "agentId": Number(this.dataSharingService.data.agentId),
      "amount": Number(this.dataSharingService.data.installmentAmount),
      "timeSpan": Number(this.dataSharingService.data.noOfYears)
    }
    console.log(data);
    this.policyService.addPolicy(data).subscribe((result)=>{
      console.log(result);
    });
  }

}
