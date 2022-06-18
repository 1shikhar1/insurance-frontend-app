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

   addInsurancePlan(id:number,data:any){
    let url= "http://localhost:8080/api/v1/insurance/"+id+"/addInsurancePlan"
    const httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("token")
    });
    return this.http.post(url, data, { headers: httpHeaders });
  }
  
  activateInsuranceType(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/insuranceType/"+id+"/activate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deactivateInsuranceType(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/insuranceType/"+id+"/deactivate";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }

  deleteInsuranceTypeById(id:number){
    let token = "Bearer " + localStorage.getItem("token");
    let url =  "http://localhost:8080/api/v1/insurance/insuranceType/"+id+"/delete";
    return this.http.get<any[]>(url, {
     headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }


}
