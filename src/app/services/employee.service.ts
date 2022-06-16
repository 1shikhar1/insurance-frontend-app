import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient, private router: Router) {

   }

   getEmployees(){
    let url = "http://localhost:8080/api/v1/employee"
    return this.http.get<any[]>(url)
  }

  getAgents(){
    let url = "http://localhost:8080/api/v1/agent"
    return this.http.get<any[]>(url)
  }

  getCustomers(){
    let url = "http://localhost:8080/api/v1/customer"
    return this.http.get<any[]>(url)
  }

  getInsuranceTypes(){
    let url = "http://localhost:8080/api/v1/insurance/insuranceType"
    return this.http.get<any[]>(url)
  }

  getInsurancePlans(){
    let url = "http://localhost:8080/api/v1/insurance/insurancePlan"
    return this.http.get<any[]>(url)
  }
}
