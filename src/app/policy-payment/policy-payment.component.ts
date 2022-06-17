import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-payment',
  templateUrl: './policy-payment.component.html',
  styleUrls: ['./policy-payment.component.css']
})
export class PolicyPaymentComponent implements OnInit {

  title:string="POLICY PAYMENT";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
