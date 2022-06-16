import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'viewAgents',
  styleUrls: ['./view-agent-records.component.css'],
  templateUrl: './view-agent-records.component.html',
})
export class ViewAgentRecordsComponent implements OnInit {
  title:string = "AGENT RECORDS"

  agents: any[]=[]
  
  constructor(private agentService: AgentService) {
    this.getAgents();
   }

   getAgents(){
    this.agentService.getAgents().subscribe((result)=>{
      this.agents = result
    })
   }

  ngOnInit(): void {
  }

}
