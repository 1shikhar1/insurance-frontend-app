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
  agents: any[] = []

  constructor(private service: AgentService, private route: Router) {
    this.getAgents()
  }

  ngOnInit(): void {
  }

  getAgents() {
    this.service.getAgents().subscribe(data => {
      console.log("hello")
      console.log(data)
    this.agents= data;
    })
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }
}
