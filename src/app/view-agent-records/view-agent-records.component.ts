import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'viewAgents',
  styleUrls: ['./view-agent-records.component.css'],
  templateUrl: './view-agent-records.component.html',
})
export class ViewAgentRecordsComponent implements OnInit {
  title: string = "VIEW AGENT RECORDS"
  agentName: string = "";
  agentCode: string = "";
  address: string = "";
  email_id: string = "";
  qualification: string = "";
  status: string = "";
  action: string = "";
  agents: any[] = []

  constructor(private service: AgentService) {
    this.getAgents()
  }

  ngOnInit(): void {
  }

  getAgents() {
    this.service.getAgents().subscribe(data => {
      console.log(data)
      data.map(el => {
        if (el.status) {
          el.status = 'active'
        } if (!el.status) {
          el.status = 'inactive'
        }
        this.agents.push(el)
      })
    })
  }
}
