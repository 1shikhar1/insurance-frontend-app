import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/services/employee.service';


@Component({
  selector: 'employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
credentials={
  username:'',
  password:''
}
  constructor(private loginService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // if((this.credentials.username!='' && this.credentials.password!='') && 
    // (this.credentials.username!=null && this.credentials.password!=null)){
    //   this.loginService.generateToken(this.credentials).
    //   subscribe((response:any)=>{
    //    console.log(response.token);
    //    this.loginService.loginUser(response.token);
    //    window.location.href="/";

    //   },
    //   error=>{
    //   console.log(error);
    //   alert("**Wrong Credentials Entered")
    //   })
    // }else{
    //   alert("**Please Fill both Username and Password");
    // }
    if(this.credentials.username=="employee" && this.credentials.password=="employee"){
      window.location.href="/employee-dashboard"
      // this. router. navigate(['/employee-dashboard']); 
    }else{
      alert("wrong credentials");
    }
  }
}

