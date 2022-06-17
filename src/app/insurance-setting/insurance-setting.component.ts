import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-setting',
  templateUrl: './insurance-setting.component.html',
  styleUrls: ['./insurance-setting.component.css']
})
export class InsuranceSettingComponent implements OnInit {
title:string="Insurance Settings"
claimDeduction:number=0
penaltyAmount:number=0
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
