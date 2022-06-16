import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient, private router: Router) {

   }

   getCustomers(){
    let url = "http://localhost:8080/api/v1/customer"
    return this.http.get<any[]>(url)
   }

}
