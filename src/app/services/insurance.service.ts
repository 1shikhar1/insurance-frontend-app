import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http:HttpClient, private router: Router) {

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

   addInsuranceType(data:any){
     console.log(data)
    var token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/addInsuranceType";
    return this.http.post<any[]>(url,data, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
   }
}
