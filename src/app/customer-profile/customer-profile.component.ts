import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  title:string="PROFILE";
  cust_name:string="Abhi";
  dob:string="";
  loginId:string="";
  password:string="";
  address:string="";
  email:string="";
  state:string="";
  city:string="";
  mobile:string="";
  nominee:string="";
  nomineeRelation:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
