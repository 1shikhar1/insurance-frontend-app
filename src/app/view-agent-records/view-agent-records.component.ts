import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viewAgents',
  styleUrls: ['./view-agent-records.component.css'],
  templateUrl: './view-agent-records.component.html',
})
export class ViewAgentRecordsComponent implements OnInit {
  title:string = "VIEW AGENT RECORDS"
  agentName: string="";
  agentCode : string = "";
  address: string = "";
  email_id: string = "";
  qualification :string = "";
  status:string="";
  action:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
