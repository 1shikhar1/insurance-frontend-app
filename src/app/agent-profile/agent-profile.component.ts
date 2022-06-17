import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
  title:string="Agent Details"
  agent:any={};
  constructor(private agentService: AgentService, private route: Router) { }

  ngOnInit(): void {
  }

  getAgentById(){
    let id:any;
    id = localStorage.getItem("userId");
    let idd:number= +id;
    this.agentService.getAgentById(idd).subscribe((result)=>{
      this.agent=result;
      
    })
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

}
