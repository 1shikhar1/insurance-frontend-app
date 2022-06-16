import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewCustomer',
  templateUrl: './view-customer-for-agent.component.html',
  styleUrls: ['./view-customer-for-agent.component.css']
})
export class ViewCustomerForAgentComponent implements OnInit {

  title: string = "Customers"
  customers: any[] = []

  constructor() {

   }

  ngOnInit(): void {
  }
}
