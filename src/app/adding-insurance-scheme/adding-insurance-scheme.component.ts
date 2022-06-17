import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'addInsuranceScheme',
  templateUrl: './adding-insurance-scheme.component.html',
  styleUrls: ['./adding-insurance-scheme.component.css']
})
export class AddingInsuranceSchemeComponent implements OnInit {
  title:string="Adding Insurance Scheme";
  insuranceType:string="";
  insuranceScheme:string="";
  image:any="";
  commissionNewReg:string="";
  commissionInstallementPay:string="";
  note:string="";
  status:string="";
 
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let data={
      "insuranceType":this.insuranceType,
      "insuranceScheme":this.insuranceScheme,
      "image":this.image,
      "commissionNewReg":this.commissionInstallementPay,
      "commissionInstallmentPay":this.commissionInstallementPay,
      "note":this.note,
      "status":this.status,
      
    }
  //  this.service.addCustomer(data);
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
 
