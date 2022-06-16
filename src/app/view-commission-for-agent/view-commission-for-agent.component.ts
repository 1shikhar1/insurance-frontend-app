import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'viewCommission',
  templateUrl: './view-commission-for-agent.component.html',
  styleUrls: ['./view-commission-for-agent.component.css']
})
export class ViewCommissionForAgentComponent implements OnInit {
  title: string = "View Customers Record"
  customerName: string = "";
  DOB: string = "";
  LoginId: string = "";
  Address: string = "";
  mobileNo: string = "";
  nominee: string = "";
  nomineeRelation = "";
  status: string = "";
  customers: any[] = []

  constructor(private customerService: CustomerService) {
    this.getAllCustomers()
  }

  ngOnInit(): void {
  }

  getAllCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.customers.push(el)
      })
    })
  }
}