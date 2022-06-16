import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http:HttpClient, private router: Router) {

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
