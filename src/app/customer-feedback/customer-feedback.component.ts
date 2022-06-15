import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customerQueries',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  title:string="FeedBack";
  constructor() { }

  ngOnInit(): void {
  }

}
