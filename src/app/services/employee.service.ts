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

  getAgentTransactions(){
    let url = "http://localhost:8080/api/v1/agentTransaction"
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getCustomerTransactions(){
    let url = "http://localhost:8080/api/v1/customerTransaction"
    let token = "Bearer " + localStorage.getItem("token")
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getPolicies(){
    var token = "Bearer " + localStorage.getItem("token");
    let url = "http://localhost:8080/api/v1/policy";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getInsurancePlans(){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/insurancePlan";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
  
  addEmployee(data:any){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/addEmployee";
    return this.http.post<any[]>(url,data, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  activateEmployee(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/activate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateEmployee(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/deactivate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deleteEmployeeById(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id+"/delete";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  getEmployeeById(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/employee/"+id;
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

}
