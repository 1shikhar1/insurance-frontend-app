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
editButton:boolean[]=[];
reply:string=""
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
 
  editReply(id:number,feedbackId:number){
    console.log(id)
    if(this.editButton[id]==true){
      this.addFeedback(feedbackId,this.reply);
      this.editButton[id]=false;
    }else{
      this.editButton[id]=true;
    }
  }

  addFeedback(id:number,reply:any){
    let data:any= {
       "message": "thanks all of you"
     }
    this.service.addReply(id,data).subscribe((result)=>{
      console.log(result);
    })
  }

}
