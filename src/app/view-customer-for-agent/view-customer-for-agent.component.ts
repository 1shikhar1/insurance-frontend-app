import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewCustomer',
  templateUrl: './view-customer-for-agent.component.html',
  styleUrls: ['./view-customer-for-agent.component.css']
})
export class ViewCustomerForAgentComponent implements OnInit {
  title:string = "View Customers Record"
  customerName : string = "";
  DOB: string = "";
  LoginId: string = "";
  Address:string = "";
  mobileNo:string="";
  nominee:string = "";
  nomineeRelation = "";
  status:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
