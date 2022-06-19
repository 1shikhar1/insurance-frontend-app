import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-payment-slip',
  templateUrl: './payment-slip.component.html',
  styleUrls: ['./payment-slip.component.css']
})
export class PaymentSlipComponent implements OnInit {

  constructor(private route: Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
