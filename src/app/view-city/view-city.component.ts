import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewCity',
  templateUrl: './view-city.component.html',
  styleUrls: ['./view-city.component.css']
})
export class ViewCityComponent implements OnInit {
  title:string = "VIEW CITY RECORDS"
   city: string="";
   status : string = "";
   action: string = "";
 
  constructor(private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/app-home'])
    } }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
