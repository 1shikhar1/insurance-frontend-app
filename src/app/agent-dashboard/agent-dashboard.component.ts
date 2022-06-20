import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
username:string="Agent"
  constructor(private route:Router) {
    let token= localStorage.getItem("token")

    if(token==null){
      this.route.navigate(['/agent-login'])
    }
   }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  // getFeedbackCount(){
  //   this.feedbackService.getFeedback().subscribe((result)=>{
  //     this.noOfQueries= result.length;
  //   })
  //   }

}
