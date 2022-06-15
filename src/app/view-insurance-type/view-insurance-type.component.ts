import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insuranceType',
  templateUrl: './view-insurance-type.component.html',
  styleUrls: ['./view-insurance-type.component.css']
})
export class ViewInsuranceTypeComponent implements OnInit {
title:string="View Insurance Type"
insuranceType:string=""
status:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
