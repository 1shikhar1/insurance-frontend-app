import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'viewCustomer',
  templateUrl: './view-customer-for-agent.component.html',
  styleUrls: ['./view-customer-for-agent.component.css']
})
export class ViewCustomerForAgentComponent implements OnInit {

  title: string = "Customers"
  customers: any[] = []

  constructor(private customerService: CustomerService) {
    this.getCustomerss();
   }

   getCustomerss(){
    this.customerService.getCustomers().subscribe((result)=>{
      this.customers = result
    })
   }

  ngOnInit(): void {
  }
}
