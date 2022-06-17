import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'viewFeedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
feedback:any=[];
  constructor(private service: FeedbackService,private route: Router) { 
    this.getFeedback();
  }

  ngOnInit(): void {
  }

getFeedback(){
  this.service.getFeedback().subscribe((result)=>{
    this.feedback = result;
  })
}
  
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
