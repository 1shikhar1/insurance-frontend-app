import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {

  constructor(private http: HttpClient, private router: Router) { }

  addEmployee(data:any)
    {
      console.log(data);
    }
}
