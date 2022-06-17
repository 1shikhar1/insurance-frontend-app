import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  token:any=[];
  constructor(private service:LoginService, private route:Router) { }
 
  ngOnInit(): void {
  }

  getUserFormData(data:any){
    console.log(data);
    this.service.loginUser(data).subscribe(user=>{
      this.token=user
      console.log(this.token.token)
      console.log(data.id)
      localStorage.setItem("token",this.token.token);
      localStorage.setItem("userId",data.id);
      this.route.navigate(['/admin-dashboard'])
    })
  }
  
  
}
