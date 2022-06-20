import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'viewCommission',
  templateUrl: './view-commission-for-agent.component.html',
  styleUrls: ['./view-commission-for-agent.component.css']
})
export class ViewCommissionForAgentComponent implements OnInit {
  title: string = "Commission Record"
  
  agentTransactions:any[] = []

  constructor(private agentService: AgentService, private route: Router) {
    this.getAgentTransactions();
  }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.route.navigate(['/app-home'])
  }

  getAgentTransactions(){
    this.agentService.getAgentTransactions().subscribe((result)=>{
      console.log(result)
      this.agentTransactions = result;
    })
  }
}