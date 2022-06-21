import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'viewAgents',
  styleUrls: ['./view-agent-records.component.css'],
  templateUrl: './view-agent-records.component.html',
})
export class ViewAgentRecordsComponent implements OnInit {
  title: string = "AGENT RECORDS"
  agents: any[] = [];

  constructor(private agentService: AgentService, private route: Router) {
    let token= localStorage.getItem("token")
    if(token==null){
      this.route.navigate(['/app-home'])
    }
    this.getAgents()
  }

  ngOnInit(): void {
  }

  getAgents() {
    this.agentService.getAgents().subscribe(data => {
    this.agents= data;
    })
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  activateAgent(id:number){
    this.agentService.activateAgent(id).subscribe((result)=>{
     
    })
    window.location.href="viewAgents";
  }
  
  deactivateAgent(id:number){
    this.agentService.deactivateAgent(id).subscribe((result)=>{
      
    })
    window.location.href="viewAgents";
  }

  deleteAgentById(id:number){
    this.agentService.deleteAgentById(id).subscribe((result)=>{
      
    })
    window.location.href="viewAgents";
  }



}
