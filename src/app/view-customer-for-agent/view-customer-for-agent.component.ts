import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'viewCustomer',
  templateUrl: './view-customer-for-agent.component.html',
  styleUrls: ['./view-customer-for-agent.component.css']
})
export class ViewCustomerForAgentComponent implements OnInit {

  title: string = "Customers"
  customers: any[] = []

  constructor(private customerService: CustomerService, private route: Router) {
    this.getCustomerss();
   }

   getCustomerss(){
    this.customerService.getCustomers().subscribe((result)=>{
      this.customers = result
    })
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  activateCustomer(id:number){
    this.customerService.activateCustomer(id).subscribe((result)=>{
     
    })
    window.location.href="viewCustomer";
  }
  
  deactivateCustomer(id:number){
    this.customerService.deactivateCustomer(id).subscribe((result)=>{
      
    })
    window.location.href="viewCustomer";
  }

  deleteCustomerById(id:number){
    this.customerService.deleteCustomerById(id).subscribe((result)=>{
      
    })
    window.location.href="viewCustomer";
  }

}
