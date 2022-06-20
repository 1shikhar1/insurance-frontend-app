import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private customerService: CustomerService, private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/customer-login'])
    } 
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

 logOut(){
  localStorage.clear();
  this.route.navigate(['/app-home'])
}

}
