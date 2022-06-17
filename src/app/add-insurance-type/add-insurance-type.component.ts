import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'addInsuranceType',
  templateUrl: './add-insurance-type.component.html',
  styleUrls: ['./add-insurance-type.component.css']
})
export class AddInsuranceTypeComponent implements OnInit {
title:string="Add Insurance Type"
insuranceType:string=""
status:string=""
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
