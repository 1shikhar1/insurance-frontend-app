import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taxSetting',
  templateUrl: './tax-setting.component.html',
  styleUrls: ['./tax-setting.component.css']
})
export class TaxSettingComponent implements OnInit {
title:string="Tax Panel"
taxPercentage:number=0
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
