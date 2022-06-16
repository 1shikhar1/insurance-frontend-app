import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient, private router: Router) {

   }

   getEmployees(){
    var token = "Bearer " + localStorage.getItem("token");
    let url = "http://localhost:8080/api/v1/employee";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
   
  }

  getAgents(){
    var token = "Bearer " + localStorage.getItem("token");
    let url = "http://localhost:8080/api/v1/agent";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getCustomers(){
    var token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/customer";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getInsuranceTypes(){
    var token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/insuranceType";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getInsurancePlans(){
    var token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/insurancePlan";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}
