import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'addInsuranceType',
  templateUrl: './add-insurance-type.component.html',
  styleUrls: ['./add-insurance-type.component.css']
})
export class AddInsuranceTypeComponent implements OnInit {
title:string="Add Insurance Type"
exform: any;
id:any;
  constructor(private route: Router, private insuranceService: InsuranceService) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/admin-login'])
    }
   }

  ngOnInit(): void {
    this.exform=new FormGroup({
      'status':new FormControl(null,Validators.required),
      'name':new FormControl(null,Validators.required)
      // 'password':new FormControl(null,Validators.required)
      // 'confirmPassword':new FormControl(null,Validators.required)
     
    });
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  addInsuranceType(){
  this.insuranceService.addInsuranceType(this.exform.value).subscribe((result)=>{
    this.id = result;
    alert("This is your Auto-Generated User-Id: "+this.id.id);
    this.route.navigate(['/admin-dashboard']);
  })
  this.exform.reset();
  }


}
