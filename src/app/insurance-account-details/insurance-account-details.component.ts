import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-account-details',
  templateUrl: './insurance-account-details.component.html',
  styleUrls: ['./insurance-account-details.component.css']
})
export class InsuranceAccountDetailsComponent implements OnInit {

  title:string="Insurance Account (Policy) details";
  constructor(private route: Router) { 

  }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
