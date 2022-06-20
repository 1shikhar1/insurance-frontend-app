import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http:HttpClient) { }

  addPolicy(data:any){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/policy/addPolicy";
    return this.http.post<any[]>(url,data, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getPolicies(){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/policy";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}
