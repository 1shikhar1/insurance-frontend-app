import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/services/admin-login.service';


@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  }
  constructor(private loginService: AdminLoginService) { }

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
    if(this.credentials.username=="admin" && this.credentials.password=="admin"){
      window.location.href="/admin-dashboard"
      // this. router. navigate(['/customer-dashboard']); 
    }else{
      alert("wrong credentials");
    }
  }
}
