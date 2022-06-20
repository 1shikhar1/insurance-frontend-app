import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewCommWithdrawal',
  templateUrl: './view-commission-withdrawal.component.html',
  styleUrls: ['./view-commission-withdrawal.component.css']
})
export class ViewCommissionWithdrawalComponent implements OnInit {
  title:string = "View Commission Withdrawl Records"
  accountNo:string="";
  requestDate : string = "";
  particulars: string = "";
  withAmt: string = "";
  status:string = "";
  constructor(private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/app-home'])
    }
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
