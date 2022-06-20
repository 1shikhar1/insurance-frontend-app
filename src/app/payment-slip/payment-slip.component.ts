import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-payment-slip',
  templateUrl: './payment-slip.component.html',
  styleUrls: ['./payment-slip.component.css']
})
export class PaymentSlipComponent implements OnInit {

  insurancePlan:any
  installmentAmount: any
  premiumType:any
  paymentDate:any
  sumAssured:any


  
  constructor(private route: Router, private dataSharingService: DataSharingService) {
    this.insurancePlan = dataSharingService.data.insurancePlan;
    this.installmentAmount = dataSharingService.data.installmentAmount;
    this.premiumType = dataSharingService.data.premiumType;
    this.paymentDate = dataSharingService.data.dateCreated;
    this.sumAssured = dataSharingService.data.sumAssured;
   }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
