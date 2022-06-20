import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewState',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {
  title:string = "VIEW STATE RECORDS"
  state: string="";
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
