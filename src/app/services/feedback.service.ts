import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private router: Router) { }

  getFeedback(){
    var token = "Bearer " + localStorage.getItem("token");
    let url = "http://localhost:8080/api/v1/feedback";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  addReply(feedbackId:number,data:any){
    var token = "Bearer " + localStorage.getItem("token");
    console.log(feedbackId,data)
    let url = "http://localhost:8080/api/v1/feedback/"+feedbackId+"/replyFeedback";
    return this.http.post<any[]>(url,data, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}
