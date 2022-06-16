import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient, private router: Router) {

   }

   getAgents(){
    let url = "http://localhost:8080/api/v1/agent"
    return this.http.get<any[]>(url)
   }
}
