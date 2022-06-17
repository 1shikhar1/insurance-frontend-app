import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'viewAgents',
  styleUrls: ['./view-agent-records.component.css'],
  templateUrl: './view-agent-records.component.html',
})
export class ViewAgentRecordsComponent implements OnInit {
  title: string = "VIEW AGENT RECORDS"
  // agentName: string = "";
  // agentCode: string = "";
  // address: string = "";
  // email_id: string = "";
  // qualification: string = "";
  // status: string = "";
  // action: string = "";
  agents: any[] = [];

  constructor(private agentService: AgentService, private route: Router) {
    this.getAgents()
  }

  ngOnInit(): void {
  }

  getAgents() {
    this.agentService.getAgents().subscribe(data => {
      console.log("hello")
      console.log(data)
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
