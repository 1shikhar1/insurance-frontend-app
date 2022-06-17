import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'marketingAgent',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  credentials = {
    email_id: '',
    subject: '',
    message: '',

  }
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
