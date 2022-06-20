import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customerQueries',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {
  title: string = "FeedBack";
  constructor(private service: CustomerService, private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/customer-login'])
    }
  }

  ngOnInit(): void {}
  sendFeedback(data: any) {
    console.log(data);
    this.service.sendFeedback(data).subscribe(resp=>{
      console.log(resp);
      alert("feed back send successfully");
    });
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
