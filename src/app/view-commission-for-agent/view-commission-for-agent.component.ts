import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'viewCommission',
  templateUrl: './view-commission-for-agent.component.html',
  styleUrls: ['./view-commission-for-agent.component.css']
})
export class ViewCommissionForAgentComponent implements OnInit {
  title: string = "Commission Record"
  customerName: string = "";
  DOB: string = "";
  LoginId: string = "";
  Address: string = "";
  mobileNo: string = "";
  nominee: string = "";
  nomineeRelation = "";
  status: string = "";
  customers: any[] = []

  constructor(private customerService: CustomerService, private route: Router) {
    
  }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}