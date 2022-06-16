import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  title:string="PROFILE";
  // cust_name:string="Abhi";
  // dob:string="";
  // loginId:string="";
  // password:string="";
  // address:string="";
  // email:string="";
  // state:string="";
  // city:string="";
  // mobile:string="";
  // nominee:string="";
  // nomineeRelation:string="";
  customer:any={};
  constructor(private customerService: CustomerService) { 
    this.getCustomerData();
  }

  ngOnInit(): void {
  }
 getCustomerData(){
   let id:any;
   id = localStorage.getItem("userId");
   let idd:number= +id;
 this.customerService.getCustomerById(idd).subscribe((result)=>{
   console.log(result)
  this.customer=result;
 })

 }


}
