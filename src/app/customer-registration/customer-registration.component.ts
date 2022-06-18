import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';



@Component({
  selector: 'customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  id:any;
  title:string="CUSTOMER REGISTRATION";
  constructor(private service:CustomerService, private route:Router) {
  }

  exform: any;
  ngOnInit(): void {
    this.exform=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'dob':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'state':new FormControl(null,Validators.required),
      'city':new FormControl(null,Validators.required),
      'number':new FormControl(null,Validators.required),
      'nominee':new FormControl(null,Validators.required),
      'nomineeRelation':new FormControl(null,Validators.required)
    });
  }

  addCustomerData()
  {
    this.service.addCustomerData(this.exform.value).subscribe(result=>{
      this.id = result;
      alert("Your User Id: "+this.id.id);
      this.route.navigate(['/app-home']);
    })
    this.exform.reset();
  }

}
