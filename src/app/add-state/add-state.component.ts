import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'addState',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {
  title:string="STATE";
  state:string="";
  status:string="";
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
