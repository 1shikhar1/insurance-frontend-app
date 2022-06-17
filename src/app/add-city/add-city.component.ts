import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'addCity',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  title:string="CITY"
  city:string=""
  status:string=""
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
  
  }
  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
